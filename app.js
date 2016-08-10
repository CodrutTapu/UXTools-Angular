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
    Summernote Initialize
==================================
*/
$(document).on('click','.editable',function(){
    $('.editable').each(function(){
        $(this).summernote('destroy');
    });
    $(this).summernote({
        toolbar: [
            ['all', ['style','fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough','clear', 'paragraph', 'hr', 'ol', 'ul', 'picture', 'video', 'link', 'codeview', 'table', 'undo']]
        ]
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
(function add(){
    $('.bar-graph-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='progress-wrapper'><p class='editable'>Label</p><div class='v-slider'></div><div class='delete-progress-bar'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
});
    $(".v-slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
        $(".amount").val(ui.value);
        }
    });
})();
$(document).on('click','.bar-graph-module .delete-progress-bar',function(){
    $(this).parent().remove();
});
$(document).on('click','.bar-graph-module .add',function(){
    $(".bar-graph-module .v-slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        slide: function (event, ui) {
        $(".amount").val(ui.value);
        }
    });
});
$(".bar-graph-module .v-slider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 60,
    slide: function (event, ui) {
    $(".amount").val(ui.value);
    }
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
(function add(){
    $('.tag-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='tag'><p class='editable'>tag</p><div class='delete-tag'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
    });
})();
$(document).on("mouseenter",".tag-module .tag",function(){
    $(this).find('.delete-tag').stop().show(200);
});
$(document).on("mouseleave",".tag-module .tag",function(){
    $(this).find('.delete-tag').stop().hide(200);
});
$(document).on("click",".tag-module .delete-tag",function(){
    $(this).parent().remove();
});
/*
==================================
    Scale Chart Module
==================================
*/
(function add(){
    $('.scale-chart-module .add').click(function(){
        $(this).parents().eq(2).append("<div class='slide-wrapper'><div class='slide-header clearfix'><div class='side-left'><p class='editable'>Side A</p></div><div class='side-right'><p class='editable'>Side B</p></div></div><div class='v-slider'></div><div class='delete-slide'><i class='fa fa-times' aria-hidden='true'></i></div></div>");
        $( ".slide-thumb" ).draggable({ containment: "parent" });
    });
})();
$(document).on("mouseenter",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').stop().show(200);
});
$(document).on("mouseleave",".scale-chart-module .slide-wrapper",function(){
    $(this).find('.delete-slide').stop().hide(200);
});
$(document).on("click",".scale-chart-module .delete-slide",function(){
    $(this).parent().remove();
});
$(document).on('click','.scale-chart-module .add',function(){
    $(".scale-chart-module .v-slider").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        slide: function (event, ui) {
        $(".amount").val(ui.value);
        }
    });
});
$(".scale-chart-module .v-slider").slider({
    orientation: "horizontal",
    range: "min",
    min: 0,
    max: 100,
    value: 30,
    slide: function (event, ui) {
    $(".amount").val(ui.value);
    }
});
/*
==================================
    Pie Chart Module
==================================
*/
var ctx = document.getElementById("pieChart");
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    showScale: false
});
$(document).on('click','.create-pie-chart',function(){
    var pieLabels = [];
    var pieData = [];
    $('.pie-label').each(function(){
        pieLabels.push($(this).val());
    });
    $('.pie-data').each(function(){
        pieData.push($(this).val());
    });
    $('#pieChart').remove();
    $('.pie-chart-content').append("<canvas id='pieChart' width='400' height='400'></canvas>");
    var ctx = document.getElementById("pieChart");
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: pieLabels,
            datasets: [{
                data: pieData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(191, 63, 127, 0.2)',
                    'rgba(38, 12, 12, 0.2)',
                    'rgba(3, 124, 21, 0.2)',
                    'rgba(242, 230, 63, 0.2)'

                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(191, 63, 127, 1)',
                    'rgba(38, 12, 12, 1)',
                    'rgba(3, 124, 21, 1)',
                    'rgba(242, 230, 63, 1)'
                ],
                borderWidth: 1
            }]
        },
        showScale: false
    });
    pcModule.find('.pie-chart-content').stop().show(200);
    pcModule.find('.create-pie-chart-box').stop().hide(200);
});
$(document).on('click','.pie-chart-module .add-pie-segment',function(){
    $('.pie-labels-list').append("<input class='pie-label form-control' type='text' name='name' value='' required>");
    $('.pie-data-list').append("<input class='pie-data form-control' type='number' name='name' value='' required>");
});
$(document).on('click','.pie-chart-module .remove-pie-segment',function(){
    $('.pie-labels-list input').last().remove();
    $('.pie-data-list input').last().remove();
});
$(document).on('click','.pie-chart-module .add',function(){
    pcModule = $('.pie-chart-module');
    if( $('.create-pie-chart-box').is(':visible') ){
        pcModule.find('.create-pie-chart-box').stop().hide(200);
    }else {
        pcModule.find('.create-pie-chart-box').stop().show(200);
    }
});
