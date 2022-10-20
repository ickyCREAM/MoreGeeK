function video_embed_responsivo( $html ) {
return '<div class="video-container">' . $html . '</div>';
}
add_filter( 'embed_oembed_html', 'video_embed_responsivo', 10, 3 );
add_filter( 'video_embed_html', 'video_embed_responsivo' );