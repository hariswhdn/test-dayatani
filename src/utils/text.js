const obj_text_alert = {
  add: {
    success: {
      title: "Farmer Added Successfully",
      text: "You have successfully added a new farmer",
    },
    error: {
      title: "Add Farmer Failed",
      text: "The farmer has not been added to the system",
    },
  },
  edit: {
    success: {
      title: "Edit Farmer Successfully",
      text: "You have successfully added a new farmer",
    },
    error: {
      title: "Edit Farmer Failed",
      text: "The farmer has not been edited to the system",
    },
  },
  delete: {
    success: {
      title: "Farmer Deleted Successfully",
      text: "The farmer has been successfully deleted from the system",
    },
    error: {
      title: "Delete Farmer Failed",
      text: "The farmer has not been deleted from the system",
    },
  },
};

const obj_text_dialog = {
  add: {
    title: "Add Farmer",
    text: "Please make sure there are no mistakes and typos when filling the information.",
    yes: "Yes, Add",
    no: "No, Decline",
  },
  edit: {
    title: "Edit Farmer",
    text: "Please make sure there are no mistakes and typos when Editting the information.",
    yes: "Yes, Edit",
    no: "No, Decline",
  },
  delete: {
    title: "Delete Farmer",
    text: `Are you sure you want to delete <b>$name</b> ?<br />This action can not be undone.`,
    yes: "Yes, Delete",
    no: "No, Decline",
  },
};

const arr_text_table_action = [
  {
    id: 1,
    text: "View",
    icon: "visibility",
    icon_alt: "visibility_off",
    action: "view",
  },
  {
    id: 2,
    text: "Edit",
    icon: "edit",
    action: "edit",
  },
  {
    id: 3,
    text: "Delete",
    icon: "delete",
    action: "delete",
    is_danger: true,
  },
];

const arr_error = {
  400: {
    title: "Oops! Wrong Input.",
    text: "It seems there's a problem with your request. Please review and try again.",
  },
  401: {
    title: "Unauthorized Access.",
    text: "Oops! You're not authorized for this. Check your credentials or contact support.",
  },
  404: {
    title: "Page Not Found",
    text: "Looks like we've hit a dead end. Time to retrace our digital footsteps!",
  },
  409: {
    title: "Oops! There's a Conflict Here",
    text: "It seems the data you entered is already registered in our database. Please double-check or contact us if you need further assistance",
  },
  500: {
    title: "Internal Server Error.",
    text: "Something went wrong on our end. Our team is on it. Please try again later.",
  },
};

export { obj_text_alert, obj_text_dialog, arr_text_table_action, arr_error };
