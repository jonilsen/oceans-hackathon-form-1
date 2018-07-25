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
      title: "Applicant/Petitioner Information",
      pages: {
        firstPage: {
          path: "first-section/first-page",
          title: "First Page",
          uiSchema: {
            fullName: {
              first: {
                "ui:title": "Given Name (First Name)"
              },
              last: {
                "ui:title": "Family Name (Last Name)"
              },
              middle: {
                "ui:title": "Middle Name (if applicable)"
              },
              suffix: {
                "ui:title": "Suffix",
                "ui:options": {
                  widgetClassNames: "form-select-medium"
                }
              }
            },
            emailAddress: {
              "ui:widget": "email",
              "ui:title": "E-mail address"
            },
            hasMobilePhone: {
              "ui:title":
                "Do you have a U.S. Mobile Phone that can receive text messages?"
            },
            'view:includePhoneNumber': {
              'ui:options': {
                expandUnder: 'hasMobilePhone',
                expandUnderCondition: true
              },
              phoneNumber: Object.assign(
                {},
                phoneUI("U.S. Mobile Phone Number"),
                {
                  "ui:description": "*Message and data rates may apply"
                }
              )
            },
            'ui:options': {
              updateSchema: (form, pageSchema) => {
                if(form.hasMobilePhone) {
                  pageSchema.properties['view:includePhoneNumber'].required = ['phoneNumber'];
                } else {
                  pageSchema.properties['view:includePhoneNumber'].required = [];
                }
                return pageSchema;
              }
            }            
          },
          schema: {
            type: "object",
            required: [
              'emailAddress'
            ],
            properties: {
              fullName,
              emailAddress: {
                type: "string"
              },
              hasMobilePhone: {
                type: "boolean"
              },
              'view:includePhoneNumber': {
                type: 'object',
                properties: {
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
    }
  }
};

export default formConfig;
