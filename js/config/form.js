import Introduction from '../components/Introduction.jsx';
import fullName from '../definitions/fullName';

import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';
import PhoneNumberWidget from 'us-forms-system/lib/js/widgets/PhoneNumberWidget';
import phoneUI from 'us-forms-system/lib/js/definitions/phone';

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
            internationalCB: {
              'ui:title': 'International'
            },
            emailAddress: {
              'ui:widget': 'email',
              'ui:title': 'Email Address'
            },
            phoneNumber: phoneUI('Phone Number')
          },
          schema: {
            type: 'object',
            properties: {
              fullName,
              internationalCB: {
                type: 'boolean'
              },
              emailAddress: {
                type: 'string'
              },
              phoneNumber: {
                type: 'string',
                minLength: 10,
                maxLength: 11
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
    },
    secondSection: {
      title: 'Second Section',
      pages: {

      }
    }
  }
};

export default formConfig;
