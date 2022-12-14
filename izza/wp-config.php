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
define( 'DB_NAME', 'izza' );

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
define( 'AUTH_KEY',         '044{`Hkb~=H>uXP.XjI`f5(uJZT7UEY<6O9fq|o~1C|t75U2GZj#WG1*nKPdnEt{' );
define( 'SECURE_AUTH_KEY',  'su7%)uid&u2D=zlAg~A|WMw#IbG(62M7+L}etG#F<dJ)-0OJa1.NKXdI~d?R3}@T' );
define( 'LOGGED_IN_KEY',    '`4xlQ0F=NjW7j<6>{_(LB$j/@S{}}w7q*Kc}]QHm7Iwo`]eOQOQa8cY!^?laoJ]|' );
define( 'NONCE_KEY',        'CA a9n9#c9yz+Q3eYcY9rBv@FrI=tfFilyGRi7Om(Sxkc;Swf^aKdPD/^ICFUNJF' );
define( 'AUTH_SALT',        'xf:KqV-F[W`x3$OqHd5k.uPl9Rrrx2/R08dXWonHx]7}PoZRL<54LC$f!tJ,B8Zg' );
define( 'SECURE_AUTH_SALT', '1 wJ`FZ%;%Cs%%|WJQ-79eB&Oo,R790<yJ%JYXw{z*.Cfk#{m)0A`<i]=X{]q}6T' );
define( 'LOGGED_IN_SALT',   '^6*%iuFm*mcBh|]Vc`%->{TyfxwV>^*(.@~@8mjcb[(peZ{;nbyerz2b{J6XD|x$' );
define( 'NONCE_SALT',       '&)<.ij,F2g:.E)4]SKPgQ-lzja4jY2X2[D,dy{9mFD6UbD=]Mv6tiwp/@7dX-}OS' );

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
