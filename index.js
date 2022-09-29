// const Notification = (props) => {
//   const { image, text, className, className1 } = props;
//   return (
//     <div className={className}>
//       <img src={image} className={className1} />
//       <label>{text}</label>
//     </div>
//   );
// };

// const element = (
//   <div className="bg-container">
//     <h1 className="heading">Notifications</h1>
//     <div className="card-container">
//       <Notification
//         image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
//         className1="images"
//         text="Information Message"
//         className="primary"
//       />
//       <Notification
//         image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
//         className1="images"
//         text="Success Message"
//         className="success"
//       />
//       <Notification
//         image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
//         className1="images"
//         text="Warning Message"
//         className="warning"
//       />
//       <Notification
//         image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
//         className1="images"
//         text="Error Message"
//         className="danger"
//       />
//     </div>
//   </div>
// );

// ReactDOM.render(element, document.getElementById("root"));

const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notifications-app-container">
    <h1 className="title">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
