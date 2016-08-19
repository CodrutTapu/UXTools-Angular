/*
==================================
    Preloader Initialize
==================================
*/
$(document).ready(function($) {
    $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
});
/*
==================================
    Image Module
==================================
*/
$(document).on('click','.image-module .image-input-set-button',function(){
    $(this).siblings('input:text').val('');
    $('.add-image').stop().hide(200);
});
$(document).on('mouseenter','.image-module',function(){
     $(this).find('.image-module-item-delete').stop().show(200);
});
$(document).on('mouseleave','.image-module',function(){
     $(this).find('.image-module-item-delete').stop().hide(200);
});
$(document).on('click','.image-module .add',function(){
    if( $('.add-image').is(':visible') ){
        $(this).parents().eq(2).find('.add-image').stop().hide(200);
    }else {
        $(this).parents().eq(2).find('.add-image').stop().show(200);
    }
});
/*
==================================
    Bar Graph Module
==================================
*/
$(document).on('mouseenter','.bar-graph-module .progress-wrapper',function(){
     $(this).find('.delete-progress-bar').stop().show(200);
});
$(document).on('mouseleave','.bar-graph-module .progress-wrapper',function(){
     $(this).find('.delete-progress-bar').stop().hide(200);
});
/*
==================================
    Social Media Module
==================================
*/
$(document).on("click",".social-media-module .edit",function(){
    var smModule = $(this).parents().eq(2);
    if( $('.edit-social-links').is(':visible') ){
        smModule.find('.social-links-list').stop().show(200);
        smModule.find('.edit-social-links').stop().hide(200);
    }else {
        smModule.find('.social-links-list').stop().hide(200);
        smModule.find('.edit-social-links').stop().show(200);
    }
});
$(document).on("click",".social-media-module .update-social-links",function(){
    $('.social-links-list').stop().show(200);
    $('.edit-social-links').stop().hide(200);
});
/*
==================================
    Email Module
==================================
*/


/*
==================================
    Tag Module
==================================
*/
$(document).on("mouseenter",".tag-module .tag",function(){
    $(this).find('.delete-tag').stop().show(200);
});
$(document).on("mouseleave",".tag-module .tag",function(){
    $(this).find('.delete-tag').stop().hide(200);
});
/*
==================================
    Scale Chart Module
==================================
*/
$(document).on("mouseenter",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').stop().show(200);
});
$(document).on("mouseleave",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').stop().hide(200);
});
/*
==================================
    Pie Chart Module
==================================
*/
$(document).on('click','.pie-chart-module .add',function(){
    var pcModule = $('.pie-chart-module');
    if( $('.create-pie-chart-box').is(':visible') ){
        pcModule.find('.create-pie-chart-box').stop().hide(200);
    }else {
        pcModule.find('.create-pie-chart-box').stop().show(200);
    }
});
/*
==================================
    Accordion Module
==================================
*/
$(document).on("mouseenter",".accordion-module .panel",function(){
    $(this).find('.delete-accordion-item').stop().show(200);
});
$(document).on("mouseleave",".accordion-module .panel",function(){
    $(this).find('.delete-accordion-item').stop().hide(200);
});
