//this program works like this;
//open an image from a subfolder and create captions and save it as jpg

importClass(Packages.ij.IJ);
importClass(Packages.ij.ImagePlus);
importClass(Packages.ij.process.ImageProcessor);
importClass(Packages.ij.io.FileSaver);
importClass(Packages.ij.plugin.Colors);

var folderPath = "C:/Users/inuko/OneDrive/lab_research/230603_crystall_gif";

// Create a Java File object for the folder
var folder = new File(folderPath);

var folders = folder.list();

var det_pep = ["HIIH", "HYYH", "PYPY"];
var det_cu = ["0:1", "1:1", "2:1"];
var det_oil = ["Paraffin", "AI", "Si"];

var whole_day = 22;
var patrial_day = 6;

//for (var i = 0; i<2; i++){
for (var i = 0; i < folders.length; i++) {  

	IJ.log("  " + i + "starts");
	var folderName = folders[i];
	var folderDir = folderPath + "/" + folderName;
	var folderSomething = new File(folderDir); 


	var days = whole_day;

	if (i == 8 || i == 11 || i == 14){days = patrial_day; }
	days = days + 1;
	
	var files = folderSomething.list();
//	for (var j = 0; j<3; j++){
	for (var j = 0; j < days; j++) {

		var fileName = files[j];
		var filePath = folderDir + "/" + fileName;



		images = new Array(days);
		if (fileName.endsWith(".tif") && fileName[0]=="d"){
			// Open the image


			var imp = IJ.openImage(filePath);
			var image = imp.getProcessor();


			if (i>14){
				var pep = "PYPY";
				var cu = "0:1";
				}else{
				var pep = det_pep[0];
				if (i%6>2){
					pep = det_pep[1];
				}
				var cu = det_cu[0];
				if (i>5){cu = det_cu[1];}
				if (i>11){cu = det_cu[2];}
			}
			var oil = det_oil[i%3];
			
			var detail = pep + "\n" + "Cu2+:peptide= " + cu + "\n" + oil;
			

			// Extract date from file name
			var date = "day" + fileName[3] + fileName[4];

			// IJ.run(imp, "Text...", "x=10 y=1000 font=12 color=White antialiased add");
			IJ.log("  " + date);

			font_date = new Font("SansSerif", Font.BOLD, 100);
			font_detail = new Font("SansSerif", Font.BOLD, 70);
			roi_date = new TextRoi(100, 1200, date, font_date);
			roi_detail = new TextRoi(100, 100, detail, font_detail);
			overlay = new Overlay();
			overlay.add(roi_date);
			overlay.add(roi_detail);
			imp.setOverlay(overlay);

			// Save the modified image as TIFF
			image = imp.getProcessor();
			//var savePath = folderDir + "/" + fileName.replace(/\.[^.]+$/, "") + "m.jpg";
			//var fs = new FileSaver(new ImagePlus("", image));
			//fs.saveAsTiff(savePath);



		//	imp.show()
		//      imp.close();

			var path_destination = "C:/Users/inuko/OneDrive/lab_research/230605_destination";


			IJ.save(imp, path_destination + "/" + folderName + "/fig_" + date + "_" + folderName + ".jpg");
			// IJ.log(path_destination + "/" + folderName + "/fig_" + date + "_" + folderName + ".jpg");


		}
	}
}


