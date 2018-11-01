<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Beyond
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
    <div class="sponsors-section">
      <h2 class="sponsors-heading">With special thanks to</h2>
      <div class="sponsor-logo-wrap">
        <img src="<?php echo get_template_directory_uri() ?>/images/the-bird-mess-hall-logo.png" alt="The Bird Mess hall Logo">
        <img src="<?php echo get_template_directory_uri() ?>/images/curtin-university-logo.png" alt="Curtin Univeristy Logo">
      </div>
    </div>
		<div class="site-info">
      <span>Branding:</span> Angel Nguyen, Tessa Zollner, Harrison Jones, Dessie Mompati, Alistair Arrow.<br>
      <span>User Interface:</span> <a href="http://www.morgandigitaldesign.com/">Morgan Murray</a><br>
      <span>Site Development and Illustration:</span> <a href="http://lukethompson.com.au">Luke Thompson</a><br>
      <span>Photography:</span> Carla Marinescu<br>
      <span>Site Testing:</span> Clement Kelly<br>
      <span>Data Management:</span> Mohamed Basher<br>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
