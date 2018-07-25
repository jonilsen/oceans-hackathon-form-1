import Introduction from "../components/Introduction.jsx";
import fullName from "../definitions/fullName";

import fullNameUI from "us-forms-system/lib/js/definitions/fullName";
import PhoneNumberWidget from "us-forms-system/lib/js/widgets/PhoneNumberWidget";
import phoneUI from "../definitions/phone";

const formConfig = {
  title: "USCIS Electronic Notification",
  subTitle: "of Application/Petition Acceptance",
  formId: "G-1145",
  urlPrefix: "/",
  trackingPrefix: "form-",
  transformForSubmit: "",
  submitUrl: "",
  introduction: Introduction,
  confirmation: "",
  defaultDefinitions: {
    fullName
  },
  chapters: {
    firstSection: {
      title: "Enter Applicant/Petitioner Information",
      pages: {
        firstPage: {
          path: "first-section/first-page",
          title: "First Page",
          uiSchema: {
            fullName: fullNameUI,
            emailAddress: {
              "ui:widget": "email",
              "ui:title": "Email Address"
            },
            hasMobilePhone: {
              "ui:title":
                "Do you have a U.S. Mobile Phone that can receive text messages?"
            },
            phoneNumber: phoneUI(
              "U.S. Mobile Phone Number (Message and data rates may apply)"
            )
          },
          schema: {
            type: "object",
            properties: {
              fullName,
              emailAddress: {
                type: "string"
              },
              hasMobilePhone: {
                type: "boolean"
              },
              phoneNumber: {
                type: "string",
                minLength: 10,
                maxLength: 15
              }
            }
          }
        }
      }
    }
  }
};

export default formConfig;
