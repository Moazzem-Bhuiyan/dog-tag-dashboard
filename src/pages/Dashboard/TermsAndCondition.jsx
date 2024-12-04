import React from "react";
import RichTextEditor from "../../components/RichTextEditor/RichTextEditor";

const TermsAndCondition = () => {
  return (
    <div className="h-[calc(100vh-170px)]">
      <p className="text-3xl font-bold mb-8 text-white">Terms and condition</p>
      <RichTextEditor/>
    </div>
  );
};

export default TermsAndCondition;
