(function(exports){
  var templates = exports.templates = exports.templates || {};

  templates.product = [
    '<li data-id="{{id}}" class="product-list-item">'
  , '  <header class="heading">'
  , '    <h2>{{#if name}}{{name}}{{else}}Awesome Product{{/if}}</h2>'
  , '    <a href="#" class="hash">@ {{businessName}}</a>'
  , '  </header>'
  , '  <img src="{{photoUrl}}/convert?w=240&h=240&fit=crop" alt="{{description}}" onerror="this.src=\'images/img-\'+ (Math.floor(Math.random() * 10) + 1) + \'.jpg\'">'
  , '  <ul class="item-buttons">'
  , '    <li><a href="#" class="want{{#if userWants}} active{{/if}}">want</a></li>'
  , '    <li><a href="#" class="like{{#if userLikes}} active{{/if}}">like it</a></li>'
  , '    <li><a href="#" class="tried{{#if userTried}} active{{/if}}">tried</a></li>'
  , '  </ul>'
  , '  <span class="like-counter">{{likes}}</span>'
  , '</li>'
  ].join('\n');

  templates.signUpModal = [
    '<div class="popup-holder">'
  , '  <div class="login-box lightbox" id="facebook-popup-2">'
  , '    <a href="#" class="close">close</a>'
  , '    <h3>Sign Up</h3>'
  , '    <a href="#" class="btn-facebook">Connect with Facebook</a>'
  , '    <span class="or">or</span>'
  , '    <form action="#" class="sign-form" id="register-form">'
  , '      <fieldset>'
  , '        <div class="row">'
  , '          <label for="user-2">Username</label>'
  , '          <div class="text">'
  , '            <input type="text" id="user-2" class="field field-screenName" placeholder="Enter Username">'
  , '          </div>'
  , '        </div>'
  , '        <div class="row">'
  , '          <label for="email">*Email (required)</label>'
  , '          <div class="text">'
  , '            <input type="text" id="email" class="field field-email" placeholder="Enter Email Address">'
  , '          </div>'
  , '        </div>'
  , '        <div class="row">'
  , '          <div class="item">'
  , '            <label for="pass-1">*Password (required)</label>'
  , '            <div class="text">'
  , '              <input type="password" id="pass-1" class="field field-password" placeholder="Enter Password">'
  , '            </div>'
  , '          </div>'
  , '          <div class="item">'
  , '            <label for="pass-2">*Confirm Password</label>'
  , '            <div class="text">'
  , '              <input type="password" id="pass-2" class="field field-password" placeholder="Confirm Password">'
  , '            </div>'
  , '          </div>'
  , '        </div>'
  , '        <button><span>Log In</span></button>'
  , '      </fieldset>'
  , '    </form>'
  , '  </div>'
  , '</div>'
  ].join('\n');

  templates.loginModal = [
    '<div class="popup-holder">'
  , '  <div class="login-box lightbox" id="facebook-popup">'
  , '    <a href="#" class="close">close</a>'
  , '    <h3>Log In</h3>'
  , '    <a href="#" class="btn-facebook">Connect with Facebook</a>'
  , '    <span class="or">or</span>'
  , '    <form action="#" class="sign-form" id="login-form">'
  , '      <fieldset>'
  , '        <div class="row">'
  , '          <label for="user">Email</label>'
  , '          <div class="text">'
  , '            <input type="text" class="field field-email" id="user">'
  , '          </div>'
  , '        </div>'
  , '        <div class="row">'
  , '          <label for="pass">Password</label>'
  , '          <div class="text">'
  , '            <input type="password" class="field field-password" id="pass" placeholder="********">'
  , '          </div>'
  , '        </div>'
  , '        <div class="check-row">'
  , '          <input type="checkbox" id="remember" checked="checked">'
  , '          <label for="remember">Remember Me</label>'
  , '          <a href="#" class="forgot">Forgot password?</a>'
  , '        </div>'
  , '        <button><span>Log In</span></button>'
  , '      </fieldset>'
  , '    </form>'
  , '  </div>'
  , '</div>'
  ].join('\n');

  templates.businesses = [
    '{{#each businesses}}'
  , '<li>'
  , '  <a class="lightbox" href="#popup-1" data-id="{{this.id}}">'
  , '    <img src="https://www.filepicker.io/api/file/TovGkwF7TCeFj3MQowEr/convert?w=114&h=114&fit=crop" data-original="{{this.logoUrl}}/convert?w=114&h=114&fit=crop" alt="{{this.name}}">'
  , '    <strong>{{this.name}}</strong>'
  , '  </a>'
  , '</li>'
  , '{{/each}}'
  ].join('\n');

  templates.businessModal = [
    '<header class="heading">'
  , '  <h3>{{name}}</h3>'
  , '  <a href="#" class="close">close</a>'
  , '</header>'
  , '<div class="holder columns">'
  , '<aside class="main-info column">'
  , '  <img src="{{logoUrl}}/convert?w=114&h=114&fit=crop" alt="{{name}}">'
  , '  {{#if url}}<a target="_blank" href="{{url}}" class="link">Visit website</a>{{/if}}'
  , '</aside>'
  , '<div class="column right">'
    , '{{#each locations}}'
    , '<div class="contact-info">'
    , '  <address>{{this.street1}}, {{#if this.street2}}{{this.street2}}, {{/if}}{{this.city}}, {{this.state}} {{this.zip}}</address>'
    , '  <em class="phone">{{this.phone}}</em>'
    , '  <a target="_blank" href="http://maps.google.com/?q={this.street1}}, {{#if this.street2}}{{this.street2}}, {{/if}}{{this.city}}, {{this.state}} {{this.zip}}" class="link">View on map</a>'
    , '</div>'
    , '{{/each}}'
  , '</div>'
  ].join('\n');
})(window);