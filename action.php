<?php
/**
 * Plugin Now: Inserts a timestamp.
 * 
 * @license    GPL 3 (http://www.gnu.org/licenses/gpl.html)
 * @author     Szymon Olewniczak <szymon.olewniczak@rid.pl>
 */

// must be run within DokuWiki
if(!defined('DOKU_INC')) die();

if(!defined('DOKU_PLUGIN')) define('DOKU_PLUGIN',DOKU_INC.'lib/plugins/');
require_once DOKU_PLUGIN.'syntax.php';

/**
 * All DokuWiki plugins to extend the parser/rendering mechanism
 * need to inherit from this class
 */
class action_plugin_prettyprint extends DokuWiki_Action_Plugin {

    function register(&$controller) {
	    $controller->register_hook('DOKUWIKI_STARTED', 'AFTER',  $this, 'add_php_data');
    }
    function add_php_data(&$event, $param) {
		global $JSINFO, $ID, $REV;

        $meta = p_get_metadata($ID);

        $rev = $REV;
        if(!$rev) { $rev = $meta['last_change']['date']; }
        if(!$meta['approval']) { $meta['approval'] = array(); }
        $allapproved = array_keys($meta['approval']);
        sort($allapproved);
        $latest_rev = $meta['last_change']['date'];

        $longdate = dformat($rev);

        # Is this document approved?
        $approver = null;
        if($meta['approval'][$rev]) {
            # Approved
            if(is_array($meta['approval'][$rev])) {
              $approver = $meta['approval'][$rev][1];
              if(!$approver) { $approver = $meta['approval'][$rev][2]; }
              if(!$approver) { $approver = $meta['approval'][$rev][0]; }
            }else{
              $approver = $meta['approval'][$rev];
            }
        }

		$JSINFO['date'] = $longdate;
		if ($approver != null) {
			$JSINFO['author'] = $meta['contributor'][$approver];
			$JSINFO['status'] = 'approved';
		} else {
			$full_name = $meta['contributor'][$meta['last_change']['user']];
			if ($full_name)
				$JSINFO['author'] = $full_name;
			else
				//probably edition by unlogin user
				$JSINFO['author'] = $meta['last_change']['user'];

			$JSINFO['status'] = 'draft';
		}
    }
}
