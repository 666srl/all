$.ajax({
				type:"get",
				url:"http://localhost:8888/item/list",
				async:true,
				success:function(q){
					console.log(q);
				}
			});