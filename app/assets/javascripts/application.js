// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .
$(function() {
  hideSection();
  $("#add-row").on("click", addRow);
  $("#update_course_button").on("click", greyOut);
  $(".delete-association").on("click", deleteRow);

});

function greyOut(){
  $("#update_course_button").attr("disabled","disabled");
  $(".edit_course").submit();
}

function hideSection(){
  var grade_list = $("#grade_list");
  if(grade_list != "null"){
    grade_list.children().last().hide();
  }
}

function addRow(){
  var grade_list = $("#grade_list");
  if(grade_list != "null"){
    grade_list.children().last().show();
  }
}

function deleteRow(event){
  $(event.target).closest(".association").css("display", "none");
}

function saveDate(event){
  var id = event.target.id;
  $("#edit_assignment_"+id).submit();
}
