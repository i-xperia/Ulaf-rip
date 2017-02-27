<?php if (have_posts()): while (have_posts()) : the_post(); ?>

              <div class="col-md-4 col-sm-6">
               <div id="post-<?php the_ID(); ?>" <?php post_class('looper'); ?>>
                  <div class="stm-single-post-loop post-3186 post type-post status-publish format-standard has-post-thumbnail hentry category-ifaf category-other tag-wada">
                    <a href="http://www.ifaf.info/ifaf/ifaf-took-part-wadas-webinar/" title="IFAF Took Part in WADA’s Webinar">
                      <div class="image">
                        <div class="stm-plus"></div>
                        <?php if ( has_post_thumbnail()) :
                          the_post_thumbnail('medium');
                          else: ?>
                         <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
                          <?php endif; ?></div>
                      <div class="date heading-font">
                        <?php the_date(); ?> </div>
                      <div class="title heading-font">
                        <?php single_post_title(); ?> </div>
                    </a>
                    <div class="content">
                      <p><?php wpeExcerpt('wpeExcerpt40'); ?></p>
                    </div>
                    <div class="post-meta heading-font">
                      <div class="comments-number">
                        <a href="http://www.ifaf.info/ifaf/ifaf-took-part-wadas-webinar/#comments">
                          <i class="fa fa-commenting"></i>
                          <span><?php comments_number(); ?></span>
                        </a>
                      </div>
                      <div class="post_list_item_tags">
                        <a href="http://www.ifaf.info/tag/wada/">
                          <?php the_tags('<i class="fa fa-tag"></i>'); ?></a>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

<!-- /looper -->
  <?php endwhile; else: ?>
<?php endif; ?>
