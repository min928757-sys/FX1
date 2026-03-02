// Trading Flashcards Data
const flashcards = [
    {
        term: "Bull Market",
        definition: "ဈေးကွက်အတက်ဘက်။ စျေးနှုန်းတွေ မြင့်တက်နေတဲ့ အခြေအနေ"
    },
    {
        term: "Bear Market",
        definition: "ဈေးကွက်အကျဘက်။ စျေးနှုန်းတွေ ကျဆင်းနေတဲ့ အခြေအနေ"
    },
    {
        term: "Support Level",
        definition: "ဈေးကျော်လို့မရတဲ့ အောက်ခြေအဆင့်။ ဝယ်သူတွေ ဝင်လေ့ရှိတဲ့ နေရာ"
    },
    {
        term: "Resistance Level",
        definition: "ဈေးတက်လို့မရတဲ့ အပေါ်ဆုံးအဆင့်။ ရောင်းသူတွေ ထွက်လေ့ရှိတဲ့ နေရာ"
    },
    {
        term: "Stop Loss",
        definition: "အရှုံးကန့်သတ်ချက်။ သတ်မှတ်ဈေးအောက်ရောက်ရင် အလိုအလျောက်ရောင်းချခြင်း"
    },
    {
        term: "Take Profit",
        definition: "အမြတ်ယူချက်။ သတ်မှတ်ဈေးအထက်ရောက်ရင် အလိုအလျောက်ရောင်းချခြင်း"
    },
    {
        term: "Leverage",
        definition: "ငွေချေးကုန်သွယ်ခြင်း။ အရင်းအနည်းငယ်နဲ့ ပမာဏကြီးမားစွာ ရောင်းဝယ်ခြင်း"
    },
    {
        term: "Margin",
        definition: "အာမခံငွေ။ Leverage သုံးတဲ့အခါ ထားရှိရတဲ့ ငွေပမာဏ"
    },
    {
        term: "Volume",
        definition: "ရောင်းဝယ်မှုပမာဏ။ ဈေးကွက်လှုပ်ရှားမှုကို တိုင်းတာခြင်း"
    },
    {
        term: "Volatility",
        definition: "ဈေးအတက်အကျ ပြင်းအား။ ဈေးနှုန်းအပြောင်းအလဲ မြန်ဆန်မှု"
    }
];

// Render flashcards
function renderFlashcards() {
    const grid = document.getElementById('flashcardsGrid');
    
    flashcards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'flashcard';
        cardElement.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h3>${card.term}</h3>
                    <div class="tap-indicator">👆 နှိပ်ပါ</div>
                </div>
                <div class="flashcard-back">
                    <p>${card.definition}</p>
                </div>
            </div>
        `;
        
        // Flip card on click
        cardElement.addEventListener('click', () => {
            cardElement.classList.toggle('flipped');
        });
        
        grid.appendChild(cardElement);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderFlashcards);
