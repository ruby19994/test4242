/*豆花配料*/
function onCheckBox(checkbox)
{
	var sample = document.getElementsByName("sample");
	var maxChoices = 3;
	var flag = 0;
	
	for(var i=0; i<sample.length; i++)
	{
		if(sample[i].checked)
		{
			flag ++;
		}
	}
	if(flag >= maxChoices)
	{
		for(var k=0; k<sample.length; k++)
		{
			if(!sample[k].checked)
			{
				sample[k].disabled = true;
			}
		}
	}
	else
	{
		for(var p=0; p<sample.length; p++)
		{
			if(!sample[p].checked)
			{
				sample[p].disabled = false;
			}
		}
	}
}
 
function onSubmitVote()
{
	var sample = document.getElementsByName("sample");
	var choices = 0;
	var maxChoices = 3;
	
	for(var j=0; j<sample.length; j++)
	{
		if(sample[j].checked)
		{
			choices ++;
		}
	}
	if(choices == 0)
	{
		alert("請選擇三種配料");
	}
	else if(choices > maxChoices)
	{
		alert("選項不得超過三種配料"+ maxChoices + "個");
	}
	else
	{
		alert("提交成功");
	}
}
/*冰品配料*/
function onCheckBox(checkbox)
{
	var sample1 = document.getElementsByName("sample1");
	var maxChoices_1 = 4;
	var flag_1 = 0;
	
	for(var x=0; x<sample1.length; x++)
	{
		if(sample1[x].checked)
		{
			flag_1 ++;
		}
	}
	if(flag_1 >= maxChoices_1)
	{
		for(var y=0; y<v.length; y++)
		{
			if(!sample1[y].checked)
			{
				sample1[y].disabled = true;
			}
		}
	}
	else
	{
		for(var z=0; z<sample1.length; z++)
		{
			if(!sample1[z].checked)
			{
				sample1[z].disabled = false;
			}
		}
	}
}
 
function onSubmitVote1()
{
	var sample1 = document.getElementsByName("sample1");
	var choices_1 = 0;
	var maxChoices_1 = 4;
	
	for(var w=0; w<sample1.length; w++)
	{
		if(sample1[w].checked)
		{
			choices_1 ++;
		}
	}
	if(choices_1 == 0)
	{
		alert("請選擇四種配料");
	}
	else if(choices_1 > maxChoices_1)
	{
		alert("選項不得超過四種配料"+ maxChoices_1 + "個");
	}
	else
	{
		alert("提交成功");
	}
}

<!--test-->
$(function() {

  $('.qtyplus').click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  $(".qtyminus").click(function(e) {
    e.preventDefault();
    fieldName = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});
<!--test1-->

$(function() {
  $('.qtyplus1').click(function(e1) {
    e1.preventDefault();
    fieldName1 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName1 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName1 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName1 + ']').val(0);
    }
  });
  $(".qtyminus1").click(function(e1) {
    e1.preventDefault();
    fieldName1 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName1 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName1 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName1 + ']').val(0);
    }
  });
});
<!--test2-->
$(function() {
  $('.qtyplus2').click(function(e2) {
    e2.preventDefault();
    fieldName2 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName2 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName2 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName2 + ']').val(0);
    }
  });
  $(".qtyminus2").click(function(e2) {
    e2.preventDefault();
    fieldName2 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName2 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName2 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName2 + ']').val(0);
    }
  });
});
<!--test3-->
$(function() {
  $('.qtyplus3').click(function(e3) {
    e3.preventDefault();
    fieldName3 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName3 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName3 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName3 + ']').val(0);
    }
  });
  $(".qtyminus3").click(function(e3) {
    e3.preventDefault();
    fieldName3 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName3 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName3 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName3 + ']').val(0);
    }
  });
});
<!--test4-->
$(function() {
  $('.qtyplus4').click(function(e4) {
    e4.preventDefault();
    fieldName4 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName4 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName4 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName4 + ']').val(0);
    }
  });
  $(".qtyminus4").click(function(e4) {
    e4.preventDefault();
    fieldName4 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName4 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName4 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName4 + ']').val(0);
    }
  });
});
<!--test5-->
$(function() {
  $('.qtyplus5').click(function(e5) {
    e5.preventDefault();
    fieldName5 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName5 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName5 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName5 + ']').val(0);
    }
  });
  $(".qtyminus5").click(function(e5) {
    e5.preventDefault();
    fieldName5 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName5 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName5 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName5 + ']').val(0);
    }
  });
});
<!--test6-->
$(function() {
  $('.qtyplus6').click(function(e6) {
    e6.preventDefault();
    fieldName6 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName6 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName6 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName6 + ']').val(0);
    }
  });
  $(".qtyminus6").click(function(e6) {
    e6.preventDefault();
    fieldName6 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName6 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName6 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName6 + ']').val(0);
    }
  });
});
<!--test_1-->
$(function() {
  $('.qtyplus_1').click(function(a) {
    a.preventDefault();
    fieldName_1 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName_1 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName_1 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName_1 + ']').val(0);
    }
  });
  $(".qtyminus_1").click(function(a) {
    a.preventDefault();
    fieldName_1 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName_1 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName_1 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName_1 + ']').val(0);
    }
  });
});
<!--test_2-->
$(function() {
  $('.qtyplus_2').click(function(b) {
    b.preventDefault();
    fieldName_2 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName_2 + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName_2 + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName_2 + ']').val(0);
    }
  });
  $(".qtyminus_2").click(function(b) {
    b.preventDefault();
    fieldName_2 = $(this).attr('field');
    var currentVal = parseInt($('input[name=' + fieldName_2 + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName_2 + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName_2 + ']').val(0);
    }
  });
});