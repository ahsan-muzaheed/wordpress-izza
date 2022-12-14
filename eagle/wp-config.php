<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'eagle' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5|nV1y3/nx95~NBcM9kL)gpVMn8o$8!P4Y|U,F;RVrM@)!SG{~uXn|rUBh%NQ Jt' );
define( 'SECURE_AUTH_KEY',  'mt]*y;Q%;se4>x1ZUOKCYDd`Lzj99:j7&t[~<#DO)xd6 8ZsZm |2l&h_aTOdXfA' );
define( 'LOGGED_IN_KEY',    'G)  x0ALrLs[bRat4.vm<7S:Q@XMWmUy*4R(b[x-&2%ibex9bN/c7fHEBtw)VMbL' );
define( 'NONCE_KEY',        't_ZA3NRT>LrvO(VNG!!xO:I3AYL+aXB:#=X5[@+]3Z4rkNbA+*xj!>q)lpRdxxvQ' );
define( 'AUTH_SALT',        '~-`=c8NtUnjLJ+uQt{}ug8r&C~d# ;-@]B$}o-9DI#~jhMj0Is&KQ/>iZ(Kj82Om' );
define( 'SECURE_AUTH_SALT', '9W[}fh/=,Wp:[]Zue@;PP|R#o<VQ-QlsvSthEN`(ajhvvcTK4qZ{a#sE%1w#!<+P' );
define( 'LOGGED_IN_SALT',   'VeZ,=A[{`3_=2k0] Z`BLs@-@|Y23WeN|wh7-dW_DC(T?`,@JpX2a27SXrc.>]%p' );
define( 'NONCE_SALT',       'sa5|Y!_ t$!Iii&M9/Mz9Pr^usxq]eLOwn.b!Gs@sj<2;1[{LeY]m~:0euHkZ<@n' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
