//call another macro
importClass(Packages.ij.IJ);
importClass(Packages.ij.ImagePlus);
importClass(Packages.ij.process.ImageProcessor);
importClass(Packages.ij.io.FileSaver);
importClass(Packages.ij.plugin.Colors);
//importClass(Packages.ij.javax.script);

//var filePath = "C:/Users/inuko/Downloads/engine/ij153-win-java8 Image J/ImageJ/plugins/Scripts/test_230602.js";

//load(filePath);


// what they are named
// test_230603_make_stack -> edit_stacks -> test_make_stacks -> make_stack_from_images
// how they actually work
// do stackreg twice ->  stack to images -> generate captions -> images to stack
// rename them
// stack_reg_twice -> images_from_stack -> generate_captions -> stack_from_images

var folderPath = "C:/Users/inuko/Downloads/engine/ij153-win-java8 Image J/ImageJ/plugins/Scripts/";

var script_stackreg = folderPath + "stack_reg_twice.js";
var script_images   = folderPath + "images_from_stack.js";
var script_caption  = folderPath + "generate_captions.js";
var script_stack    = folderPath + "stack_from_images.js";


IJ.log("kaishiba!!");

//load(script_stackreg);
//IJ.log("finish script_stackreg");

// crop manually

load(script_images);
IJ.log("finish script_images");

load(script_caption);
IJ.log("finish script_caption");

load(script_stack);
IJ.log("finish script__stack");

IJ.log("_VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV_");
IJ.log(">>everything finished successfully<<");
IJ.log(" YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY ");














