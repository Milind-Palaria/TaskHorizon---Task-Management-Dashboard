import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import './App.css';

import StatusList from './Components/StatusList/StatusList';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const categoryTypes = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled'];
  const teamMembers = ['Anoop sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh'];
  const priorityLevels = [
    { label: 'No priority', level: 0 },
    { label: 'Low', level: 1 },
    { label: 'Medium', level: 2 },
    { label: 'High', level: 3 },
    { label: 'Urgent', level: 4 }
  ];

  const [groupingCriteria, setGroupingCriteria] = useState(loadStateFromLocalStorage() || 'status');
  const [sortingCriteria, setSortingCriteria] = useState('title');
  const [taskData, setTaskData] = useState([]);

  const sortTasksByCriteria = useCallback(
    async (taskArray) => {
      if (sortingCriteria === 'priority') {
        taskArray.sort((a, b) => b.priority - a.priority);
      } else if (sortingCriteria === 'title') {
        taskArray.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        });
      }
      await setTaskData(taskArray);
    },
    [sortingCriteria, setTaskData]
  );

  function saveStateToLocalStorage(state) {
    localStorage.setItem('groupingCriteria', JSON.stringify(state));
  }

  function loadStateFromLocalStorage() {
    const savedState = localStorage.getItem('groupingCriteria');
    return savedState ? JSON.parse(savedState) : null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupingCriteria);

    async function fetchData() {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      await formatData(response);
    }

    fetchData();

    async function formatData(response) {
      const ticketArray = [];
      if (response.status === 200) {
        response.data.tickets.forEach((ticket) => {
          const user = response.data.users.find((user) => user.id === ticket.userId);
          if (user) {
            ticketArray.push({ ...ticket, userObj: user });
          }
        });
      }
      await setTaskData(ticketArray);
      sortTasksByCriteria(ticketArray);
    }
  }, [sortTasksByCriteria, groupingCriteria]);

  function handleGroupingChange(newGrouping) {
    setGroupingCriteria(newGrouping);
    console.log(newGrouping);
  }

  function handleSortingChange(newSorting) {
    setSortingCriteria(newSorting);
    console.log(newSorting);
  }

  return (
    <>
      <Navbar
        groupValue={groupingCriteria}
        orderValue={sortingCriteria}
        handleGroupValue={handleGroupingChange}
        handleOrderValue={handleSortingChange}
      />
      <section className="task-board">
        <div className="task-list-container">
          {
            {
              status: (
                <>
                  {categoryTypes.map((item) => (
                    <StatusList
                      groupValue="status"
                      orderValue={sortingCriteria}
                      listTitle={item}
                      listIcon=""
                      statusList={categoryTypes}
                      ticketDetails={taskData}
                    />
                  ))}
                </>
              ),
              user: (
                <>
                  {teamMembers.map((member) => (
                    <StatusList
                      groupValue="user"
                      orderValue={sortingCriteria}
                      listTitle={member}
                      listIcon=""
                      userList={teamMembers}
                      ticketDetails={taskData}
                    />
                  ))}
                </>
              ),
              priority: (
                <>
                  {priorityLevels.map((level) => (
                    <StatusList
                      groupValue="priority"
                      orderValue={sortingCriteria}
                      listTitle={level.level}
                      listIcon=""
                      priorityList={priorityLevels}
                      ticketDetails={taskData}
                    />
                  ))}
                </>
              )
            }[groupingCriteria]
          }
        </div>
      </section>
    </>
  );
}

export default App;
