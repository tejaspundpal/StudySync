import React, { useState, useEffect } from 'react';

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
  "People who are crazy enough to think they can change the world, are the ones who do.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.",
  "We may encounter many defeats but we must not be defeated.",
  "मंज़िल उन्हीं को मिलती है जिनके सपनों में जान होती है, पंख से कुछ नहीं होता हौसलों से उड़ान होती है।",
  "चेहरे तो समय के साथ सब बदल लेते है, लेकिन हालतों को बदलने वाला ही, हालातों की बात करता है।",
  "अगर आप Failure को Attention नहीं देंगे तो आपको कभी भी Success नहीं मिलेगी।",
  "महानता वह नहीं होती कि आप गिर गए और उठे ही ना, महानता उसे कहते हैं जब आप गिरकर बार-बार उठते हैं।",
  "हवाओं ने मुझे हताश करने की बहुत कोशिश की, मैं वह परिंदा बना जिसने ऊंची उड़ान भरना सही समझा।",
  "अपार आशाओं का खेल था सारा, मैंने इस खेल को समझा और देखते ही देखते जीत मेरी ही हुई।",
  "समस्याओं के समाधान खोजने वाला व्यक्ति ही सफलताओं की सत्ता प्राप्त करता है।",
  "समाज के एक धड़े ने मुझे रोकने के अनेको प्रयास किए, हकीकत तो ये है कि समाज ने ही मुझे आज सफल बनाया है।",
  "मेरी मर्यादा पर सवाल उठाने वाले साए, आज सफलताओं के प्रकाश में कहीं गुम गए हैं।",
  "कई रातें जागी हैं, आज के महान सवेरे के लिए जहां निज प्रयासों को मैं सफल होते देख पा रहा हूं।",
  "जितना हो सका मैंने खुद के सुखों को त्यागा है, सफलता के आंगन में आज मेरा हर आंसू खुशी से नाचा है।"
];

  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const Body = () => {
  const [quote,setQuote] = useState(getRandomQuote());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    },7000)

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">Motivational Quote</h1>
        <p className="text-3xl font-medium text-gray-700">{quote}</p>
      </div>
    </div>
  );
};

export default Body;
