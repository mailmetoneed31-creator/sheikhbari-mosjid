// নামাজ সময় অনুযায়ী শুভেচ্ছা মেসেজ দেখাবে
const now = new Date();
const hour = now.getHours();

let message = "আসসালামু আলাইকুম!";
if (hour < 5) message = "তাহাজ্জুদ পড়ার সময় 🌙";
else if (hour < 12) message = "সুপ্রভাত! ফজর আদায় করেছেন?";
else if (hour < 16) message = "দুপুর ভালো কাটুক ☀️";
else if (hour < 19) message = "আসর নামাজের সময় হয়েছে ⏳";
else message = "মাগরিব ও ইশার নামাজ ভুলবেন না 🕌";

alert(message);