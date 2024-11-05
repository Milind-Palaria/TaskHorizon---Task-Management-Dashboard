import "./CardComponent.css";

const CardComponent = (props) => {
  return (
    <>
      <div className="task-card-container">
        <div className="task-card-id-wrapper">
          <div className="task-card-id">{props.cardDetails.id}</div>
          <div className="task-card-profile">
            <div className="task-card-profile-initial">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "task-card-profile-availability task-card-profile-available"
                  : "task-card-profile-availability"
              }
            ></div>
          </div>
        </div>
        <div className="task-card-title">{props.cardDetails.title}</div>
        <div className="task-card-tags">
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
              )
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag, index) => (
            <div key={index} className="task-card-tag">
              <div className="task-card-tag-title">{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
