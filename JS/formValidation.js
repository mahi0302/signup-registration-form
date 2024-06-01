function validateForm() {
  let isValid = true;
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let emailId = document.getElementById("emailId");
  let fullAddress = document.getElementById("fullAddress");
  let courses = document.getElementsByClassName("courses-checkbox");
  let passwordMain = document.getElementById("passwordMain");
  let passwordConfirm = document.getElementById("paswordConfirm");

  let errorFirstName = document.getElementsByClassName("firstname-required")[0];
  errorFirstName.textContent = "";
  if (firstName.value == "" || firstName.value == undefined) {
    errorFirstName.textContent = "First Name is required";
    isValid = false;
  } else if (firstName.value.length < 5) {
    errorFirstName.textContent = "First Name should be at least 5 characters";
    isValid = false;
  }

  let errorLastName = document.getElementsByClassName("lastname-required")[0];
  errorLastName.textContent = "";
  if (lastName.value == "" || lastName.value == undefined) {
    errorLastName.textContent = "Last Name is required";
    isValid = false;
  } else if (lastName.value.length < 5) {
    errorLastName.textContent = "Last Name should be at least 5 characters";
    isValid = false;
  }

  let errorEmail = document.getElementsByClassName("emailid-required")[0];
  errorEmail.textContent = "";
  let pattern = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/;
  if (emailId.value == "" || emailId.value == undefined) {
    errorEmail.textContent = "Email Id is required";
    isValid = false;
  } else if (!pattern.test(emailId.value)) {
    errorEmail.textContent = "Invalid email format";
    isValid = false;
  }

  let fullAddressError = document.getElementsByClassName(
    "fullAddress-required"
  )[0];
  fullAddressError.textContent = "";
  if (fullAddress.value == "" || fullAddress.value == undefined) {
    fullAddressError.textContent = "Full Address is required";
    isValid = false;
  } else if (fullAddress.value.length < 20) {
    fullAddressError.textContent =
      "Full Address should be at least 20 characters";
    isValid = false;
  }

  let coursesError = document.getElementsByClassName("course-required")[0];
  coursesError.textContent = "";
  let selectedCourses = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].checked) {
      selectedCourses.push(courses[i].nextElementSibling.textContent);
    }
  }
  if (selectedCourses.length == 0) {
    coursesError.textContent = "Select at least 1 course";
    isValid = false;
  }

  let passwordMainError =
    document.getElementsByClassName("password-required")[0];
  passwordMainError.textContent = "";
  if (passwordMain.value == "" || passwordMain.value == undefined) {
    passwordMainError.textContent = "Password is required";
    isValid = false;
  } else if (passwordMain.value.length < 8) {
    passwordMainError.textContent = "Password should be at least 8 characters";
    isValid = false;
  }

  let passwordConfirmError = document.getElementsByClassName(
    "confirmPassword-required"
  )[0];
  passwordConfirmError.textContent = "";
  if (passwordConfirm.value == "" || passwordConfirm.value == undefined) {
    passwordConfirmError.textContent = "Confirm Password is required";
    isValid = false;
  } else if (passwordConfirm.value !== passwordMain.value) {
    passwordConfirmError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem(
      "formData",
      JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        emailId: emailId.value,
        fullAddress: fullAddress.value,
        courses: selectedCourses,
      })
    );
  }

  return isValid;
}

function displayFormData() {
  let formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    console.log("First Name: " + formData.firstName);
    console.log("Last Name: " + formData.lastName);
    console.log("Email Id: " + formData.emailId);
    console.log("Full Address: " + formData.fullAddress);
    console.log("Courses: " + formData.courses.join(", "));
  } else {
    console.log("Form data not found.");
  }
}

function submitForm() {
  if (validateForm()) {
    alert("Form submitted successfully!");
    displayFormData();
  } else {
    alert("Please fill in all the required fields");
  }
}
