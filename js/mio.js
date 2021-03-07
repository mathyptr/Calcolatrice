	var urlmathjs;
					
	function jsGet(exp){
					var xhttp = new XMLHttpRequest();
						xhttp.onreadystatechange = function() {
							if (this.readyState == 4 && this.status == 200) {
								document.getElementById("operazioni").value = this.responseText;
							}
						};
						xhttp.open("GET",urlmathjs+"?expr="+exp, true);
						xhttp.send();
				}

	function jqueryGet(exp){
					$.get( urlmathjs+"?expr="+exp, function( data ) {
						$("#operazioni").val(data); 
						});
				}

	function jsPost(exp){
						  var xhttp = new XMLHttpRequest();
					  xhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
						obj = JSON.parse(this.responseText);
						 document.getElementById("operazioni").value = obj.result;
						}
					  };
					 xhttp.open("POST",urlmathjs, true);
					xhttp.setRequestHeader("Content-Type","application/json");
					  xhttp.send(  JSON.stringify({"expr":exp}));
				}

	function jqueryPost(exp){
				jQuery.ajax ({
						url:  urlmathjs,
						type: "POST",
						data: JSON.stringify({"expr":exp}),
						dataType: "json",
						contentType: "application/json",
						success: function(data,status){
						 $("#operazioni").val(data.result);
						}
					});
				}

	function Check(){
					var list= document.getElementById("list");
					var opt = list.options[list.selectedIndex];
					return opt.value;
					}

	function getButton(dato){ 
					   document.getElementById("operazioni").value+=dato;
					}

	function Calculate() { 
					var opt=Check();
					var expGet=encodeURIComponent(document.getElementById("operazioni").value);
					var expPost=document.getElementById("operazioni").value;
					var resource="api.mathjs.org/v4/";
					if (window.location.protocol == "http:")
						urlmathjs="http://"+resource;
					else
						urlmathjs="https://"+resource;
					if(opt=="jsGet")
					jsGet(expGet);
					else if(opt=="jqueryGet")
					jqueryGet(expGet);
					else if (opt=="jsPost")
					jsPost(expPost);
					else if (opt=="jqueryPost")
					jqueryPost(expPost);
					}


	function cancella() { 
					 document.getElementById("operazioni").value=""; 
					}