<?php

// Register Custom Taxonomy
function graduate_skills() {

	$labels = array(
		'name'                       => _x( 'Skills', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Skill', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Skills', 'text_domain' ),
		'all_items'                  => __( 'All Skills', 'text_domain' ),
		'parent_item'                => __( 'Parent Skill', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Skill:', 'text_domain' ),
		'new_item_name'              => __( 'New Skill', 'text_domain' ),
		'add_new_item'               => __( 'Add New Skill', 'text_domain' ),
		'edit_item'                  => __( 'Edit Skill', 'text_domain' ),
		'update_item'                => __( 'Update Skill', 'text_domain' ),
		'view_item'                  => __( 'View Skill', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate skills with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove skills', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used skills', 'text_domain' ),
		'popular_items'              => __( 'Popular skills', 'text_domain' ),
		'search_items'               => __( 'Search Skills', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No Skills', 'text_domain' ),
		'items_list'                 => __( 'Skills list', 'text_domain' ),
		'items_list_navigation'      => __( 'Skills list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => false,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
    'meta_box_cb'                => false,
		'show_tagcloud'              => true,
	);
	register_taxonomy( 'skills', array( 'graduate-profile' ), $args );

}
add_action( 'init', 'graduate_skills', 0 );

?>