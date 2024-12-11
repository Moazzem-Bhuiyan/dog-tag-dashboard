import React, {useRef} from "react";

import JoditEditor from "jodit-react";

const AboutUs = () => {
     const editor = useRef(null);
     const [content, setContent] = React.useState("");

     // Configuration for Jodit Editor
     const config = {
          readonly: false, // Enables editing
          toolbarSticky: false, // Toolbar won't stick to the top
          buttons: [
               "fontsize", // Font size dropdown
               "bold", // Bold button
               "italic", // Italic button
               "underline", // Underline button
               "align", // Align options
          ],
          buttonsXS: ["fontsize", "bold", "italic", "underline", "align"], // Toolbar for smaller screens
          showCharsCounter: false, // Disable character counter
          showWordsCounter: false, // Disable word counter
          showXPathInStatusbar: false, // Hide XPath in status bar
          toolbarInline: false, // Disable inline toolbar
          height: "100%", // Full height of the container
          width: "100%", // Full width of the container
          placeholder: "Start typing here...",
     };

     // get value from editor-------------------------------------------------------

     const handleShowContent = () => {
          console.log(content);
     };

     return (
          <div className="h-[calc(100vh-170px)]">
               <p className="text-3xl font-bold mb-8 text-white">
           About us :
               </p>
               <div className="w-full h-[calc(100vh-170px)]  bg-gray-50">
                    <JoditEditor
                         ref={editor}
                         value={content}
                         config={config}
                         onBlur={(newContent) => setContent(newContent)} // Save content on blur
                         className="h-full w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-500"
                    />
                    <div className=" flex justify-center">
                         {/* Show content button */}

                         <button
                              onClick={handleShowContent}
                              className="mt-4 px-4 py-2 bg-[#252525] text-white rounded-md w-1/2">
                              Post
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default AboutUs;
