define(["./support-files/jspdf", "./support-files/jspdf.plugin.javascript", "./support-files/jspdf.plugin.addimage", "./support-files/html2canvas", "./support-files/jspdf.plugin.from_html"
, "./support-files/jspdf.plugin.sillysvgrenderer", "./support-files/jspdf.plugin.split_text_to_size", "./support-files/jspdf.plugin.standard_fonts_metrics"
, "./support-files/jspdf.min", "./support-files/jspdf.debug", "./support-files/FileSaver"
],

function () {

    return {

        paint: function ($element, layout) {

            var html = "<center><div id='my_Image_DIV'><img id='my_image' src='/extensions/com-qliktech-export-to-file/PDF.png'></center></div>";
           

            $element.html(html);

            function hideandShowTag($param) {
               
                //$("#my_Image_DIV").hide();
                return $param;
            }

            $("#my_image").click(
				function (event) {
				    html2canvas(hideandShowTag($("body")),
                    {
                        onrendered: function (canvas) {
                           
                            var imgData = canvas.toDataURL('image/jpeg');
                            ////// Param selection
                            var doc = new jsPDF('landscape');
                            doc.setProperties({
                                title: 'AeS Extension Output File',
                                author: 'Irfan'
                            });
                            //doc.addPage();
                            //doc.setFont("arial", "bold");
                            //doc.setFontSize(22);								
                             doc.addImage(imgData, 'PNG', 30, 10, 250, 120, "ScreenShot", "FAST", 360);
                            //doc.text(10, 10, "Role : " );
                            doc.save("Output File.pdf");
                            //$("#my_Image_DIV").show();
                        }
                    });
				}
			);

        }
    };

});
