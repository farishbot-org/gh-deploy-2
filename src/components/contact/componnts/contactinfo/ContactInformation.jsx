import React, { PureComponent } from "react";
import contactInfo from "../../../../config/contactInfo";

export default class ContactInformation extends PureComponent {
  render() {
    return (
      <div className="contact-page-contact-section-LHS">
        <div className="contact-page-contact-section-LHS-header">
          <span>Contact Information</span>
        </div>
        <div className="contact-page-contact-section-LHS-paragraph">
          <span>
            Thanks to our highly motivated team, we strive to provide you
            with the best service possible within the most reasonable amount of time.
          </span>
        </div>
        <div className="contact-page-contact-section-LHS-contact-list">
          <div className="contact-page-contact-section-LHS-contact-list-item">
            <svg className="footer-body-contactus-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.59 1.322l2.844-1.322 4.041 7.89-2.725 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.861 3.591-19.101-18.258-11.384-22.281zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398zm7.832 7.649l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.059c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.186c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" /></svg>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </div>
          <div className="contact-page-contact-section-LHS-contact-list-item">
            <svg className="footer-body-contactus-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.417 6.75v-.947c-.124-1.511-4.042-1.52-4.148-.001h-.013v.948c-.034 1.598 4.214 1.601 4.161 0zm-2.067-1.366c.723 0 1.311.253 1.311.564s-.588.564-1.311.564c-.724 0-1.311-.253-1.311-.564s.587-.564 1.311-.564zm-2.286 3.771v-.947c-.123-1.511-4.042-1.52-4.148-.001h-.013v.948c-.034 1.598 4.213 1.601 4.161 0zm-2.068-.238c-.723 0-1.311-.253-1.311-.564 0-.312.588-.564 1.311-.564.724 0 1.311.253 1.311.564 0 .312-.587.564-1.311.564zm2.068-4.446v-.946c-.124-1.512-4.042-1.52-4.148-.001h-.013v.947c-.034 1.598 4.214 1.602 4.161 0zm-2.067-1.366c.723 0 1.311.253 1.311.564s-.588.564-1.311.564c-.724 0-1.311-.253-1.311-.564s.587-.564 1.311-.564zm.003-3.105l-11 6 .009.019-.009-.005v12.118l11 5.868 11-5.869v-12.055l-11-6.076zm-.003 1.141l9.917 5.458-9.896 5.385-9.903-5.448 9.882-5.395zm9.003 11.63l-8 4.268v-3.039l8-4.353v3.124zm-10 4.268l-8-4.268v-3.172l8 4.401v3.039zm-8-3.228l8 4.268v2.921l-8-4.268v-2.921zm10 4.268l8-4.268v2.921l-8 4.268v-2.921zm-7.447-12.277h-.013v.948c-.034 1.598 4.213 1.601 4.161 0v-.947c-.123-1.511-4.042-1.519-4.148-.001zm2.08.71c-.723 0-1.311-.253-1.311-.564s.588-.565 1.311-.565c.724 0 1.311.253 1.311.564s-.588.565-1.311.565z" /></svg>
            <span>{contactInfo.location}</span>
          </div>
          <div className="contact-page-contact-section-LHS-contact-list-item">
            <svg className="footer-body-contactus-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
            <a href={`mailto:${contactInfo.mainEmail}`}>{contactInfo.mainEmail}</a>
          </div>
        </div>
      </div>
    );
  }
}
