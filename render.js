$(document).ready(function(){
	$.getJSON("render.js", function(data){
		console.log(data)
			$('.id').html(data.id);
		$('._key').html(data._key);
		$('.commitment').html(data.commitment);
		$('.commitment').html(data.commitment);
		$('.commitmentType').html(data.commitmentType);
		$('.description').html(data.description);
		$('.isActive').html(data.isActive);
		$('.projectImage').html(data.projectImage);
		$('.shortDiscription').html(data.shortDiscription);
		$('.status').html(data.status);
	}).fail(function(){
		console.log("check your code")
	})
})

