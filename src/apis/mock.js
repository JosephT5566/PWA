function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const mockRequest = (func, success = true, lag = 200) => async (...params) => {
    await delay(lag);
    if (!success) {
        throw new Error('mock request failed');
    }
    return func(...params);
};

export const mockService = {
    fetchUserInfo: mockRequest(() => MOCK_DATA.USER),
    fetchBankList: mockRequest(() => MOCK_DATA.BANK_LIST),
    updateBankList: mockRequest((index, item) => {
        MOCK_DATA.BANK_LIST.splice(index, 1, item);
    }),
    appendBankItem: mockRequest(() => {
        MOCK_DATA.BANK_LIST.push(INIT_BANK_ITEM);
    }),
    removeBankItem: mockRequest((index) => {
        MOCK_DATA.BANK_LIST.splice(index, 1);
    }),
};

const INIT_BANK_ITEM = {
    cardName: '',
    front: '',
    back: '',
    bank: '',
    branch: '',
    account: '',
    pin: '',
    paymentPassword: '',
    onlineBankAccount: '',
    onlineBankPassword: '',
    securityCode: '',
};

const MOCK_DATA = {
    USER: {},
    BANK_LIST: [
        {
            cardName: '洗澡卡',
            front: 'https://i.imgur.com/Ki2Vmc2.gif',
            back: 'https://source.unsplash.com/2XyUPiXfEo0/640x426',
            bank: '',
            branch: '',
            account: '',
            pin: '',
            paymentPassword: '',
            onlineBankAccount: '',
            onlineBankPassword: '',
            securityCode: '',
        },
    ],
};
