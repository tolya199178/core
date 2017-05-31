<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

/*from email address */
define('SITE_FROM_EMAIL', 'contact@serebrumlab.com');
/*site name */
define('SITE_NAME', 'Shadow Core');
/*smtp host setting */
define('SMTP_HOST', 'smtp.sendgrid.net');
/*set smtp port */
define('SMTP_PORT', '587');
/*set smtp password */
define('SMTP_PASSWORD', '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');
/*set smtp username */
define('SMTP_USERNAME', 'apikey');

define('ROLE_VIEWER', 0);
define('ROLE_CLIENT', 1);
define('ROLE_ADMIN', 2);
define('ROLE_AUTHOR', 3);
define('ROLE_PRESENTER', 4);

define('UPLOAD_PATH', FCPATH . 'uploads' . DIRECTORY_SEPARATOR);
