import Introduction from '../components/Introduction.jsx';
import fullName from '../definitions/fullName';

import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';
import PhoneNumberWidget from 'us-forms-system/lib/js/widgets/PhoneNumberWidget';
import phoneUI from '../definitions/phone';

const formConfig = {
  title: 'Form',
  subTitle: 'Test',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {
    fullName
  },
  chapters: {
    firstSection: {
      title: 'First Section',
      pages: {
        firstPage: {
          path: 'first-section/first-page',
          title: 'First Page',
          uiSchema: {
            fullName: fullNameUI,
            emailAddress: {
              'ui:widget': 'email',
              'ui:title': 'Email Address'
            },
            hasMobilePhone: {
              'ui:title': 'Do you have a U.S. Mobile Phone that can receive text messages?'
            },
            phoneNumber: phoneUI('Phone Number')
          },
          schema: {
            type: 'object',
            properties: {
              fullName,
              emailAddress: {
                type: 'string'
              },
              hasMobilePhone: {
                type: 'boolean'
              },
              phoneNumber: {
                type: 'string',
                minLength: 10,
                maxLength: 15
              }
            }
          }
        },
        secondPage: {
          path: 'first-section/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    }
  }
};

export default formConfig;
