import "./StatusList.css";
import CardComponent from "../CardComponent/CardComponent";

let totalCards = 0;

const StatusList = (props) => {
  return (
    <>
      <div className="task-container">
        <div className="task-header">
          <div className="task-header-left">
            {
              {
                status: (
                  <>
                    {
                      {
                        Backlog: (
                          <div className="task-icon">
                            <img src="/assets/Backlog.svg" alt="Backlog" />
                          </div>
                        ),
                        Todo: (
                          <div className="task-icon">
                            <img src="/assets/To-do.svg" alt="To Do" />
                          </div>
                        ),
                        "In progress": (
                          <div className="task-icon">
                            <img src="/assets/in-progress.svg" alt="In Progress" />
                          </div>
                        ),
                        Done: (
                          <div className="task-icon">
                            <img src="/assets/Done.svg" alt="Done" />
                          </div>
                        ),
                        Cancelled: (
                          <div className="task-icon">
                            <img src="/assets/Cancelled.svg" alt="Cancelled" />
                          </div>
                        ),
                      }[props.listTitle]
                    }
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      {
                        0: (
                          <div className="priority-tag-icon">
                            <img src="/assets/No-priority.svg" alt="No Priority" />
                          </div>
                        ),
                        1: (
                          <div className="priority-tag-icon">
                            <img src="/assets/Img - Low Priority.svg" alt="Low Priority" />
                          </div>
                        ),
                        2: (
                          <div className="priority-tag-icon">
                            <img src="/assets/Img - Medium Priority.svg" alt="Medium Priority" />
                          </div>
                        ),
                        3: (
                          <div className="priority-tag-icon">
                            <img src="/assets/Img - High Priority.svg" alt="High Priority" />
                          </div>
                        ),
                        4: (
                          <div className="priority-tag-icon">
                            <img src="/assets/SVG - Urgent Priority colour.svg" alt="Urgent Priority" />
                          </div>
                        ),
                      }[props.listTitle]
                    }
                  </>
                ),
              }[props.groupValue]
            }

            <div className="task-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityLevel) =>
                            priorityLevel.level === props.listTitle ? (
                              <>{priorityLevel.label}</> // Updated to use `priorityLevel.label`
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="task-count">{totalCards}</div>
          </div>
          <div className="task-header-right">
            <div className="task-add-item">
              <img src="/assets/add.svg" alt="Add" />
            </div>
            <div className="task-options-item">
              <img src="/assets/3 dot menu.svg" alt="3 Dot Menu" />
            </div>
          </div>
        </div>

        <div className="task-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              totalCards++;
              return <CardComponent cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              totalCards++;
              return <CardComponent cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              totalCards++;
              return <CardComponent cardDetails={ticket} />;
            }
            return null;
          }, (totalCards = 0))}
        </div>
      </div>
    </>
  );
};

export default StatusList;
