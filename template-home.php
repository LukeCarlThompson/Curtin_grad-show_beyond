<?php
/**
 * Template Name: Home Page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Beyond
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		// while ( have_posts() ) :
		// 	the_post();

		// 	get_template_part( 'template-parts/content', 'page' );

		// endwhile; // End of the loop.
		?>

    <div class="hero-section">
    
    </div>

    <div class="about-section">
      <h2 class="section-heading">Join Us</h2>
      <p>Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    
    </div>

    <div class="details-section">

      <div class="details-info-wrap">
        <h2 class="section-heading">November 23rd / 6pm</h2>
        <h3>The Bird</h3>
        <p>181 William St, Northbridge</p>
      </div>
    
    </div>

    <div class="graduates-section">
      <h2 class="section-heading">The Graduates</h2>
      <div class="filter-wrap">
        <p>Filter by</p>
      </div>
      <div class="graduates-grid-wrap">

        <?php
        $args = array(
          'post_type' => array( 'graduate-profile' ),
          'post_status' => array( 'publish' ),
          'orderby' => 'menu_order',
        );
        // The Query
        $the_query = new WP_Query( $args );

        // The Loop
        if ( $the_query->have_posts() ) {
          while ( $the_query->have_posts() ) {
            $the_query->the_post();
            ?>
            <div class="graduate-block-wrap">
              <a class="graduate-grid-link" data-swup-class="graduate-profile" href="<?php echo get_permalink() ?>">
                <?php 
                $image = get_field('profile_picture');
                if( !empty($image) ): ?>
                  <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                <?php endif; ?>
                <div class="graduate-info-wrap">
                  <h2 class="graduate-name"><?php the_field('your_name'); ?></h2>

                  <?php 
                  $terms = get_field('skills_list');
                  if( $terms ): ?>
                    <ul class="skills-list">
                    <?php foreach( $terms as $term ): ?>
                      <li class="skills-list-item"><?php echo $term->name; ?></li>
                    <?php endforeach; ?>
                    </ul>
                  <?php
                  endif;
                  ?>

                </div>
              </a>
            </div>
            <?php
          }
          /* Restore original Post Data */
          wp_reset_postdata();
        } else {
          // no posts found
        }
        ?>
      
      </div>
    
    </div>

    <div class="sponsors-section">
      <h2 class="section-heading">Sponsors</h2>
    </div>

    <div class="contact-section">
      <h2 class="section-heading">Contact</h2>
    </div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
