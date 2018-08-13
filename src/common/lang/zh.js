export default {
  common: {
    testNet: 'TestNet',
    mainNet: 'Main Net',
    copied: '已复制！',
    confirmPwdTips: '请确认并输入钱包密码。',
    confirmTips: '请确认转账',
    transSentSuccess: '交易已成功发送',
    pwdErr: '密码错误',
    ongNoEnough: 'ONG不足，无法支付转账手续费。',
    transferFailed: '交易失败。',
    networkErr: '网络错误！',
    normalWallet: '普通钱包',
    sharedWallet: '共享钱包',
    hardwareWallet: 'Ledger钱包',
    export: '导出',
    ledgerNotOpen: 'Ledger未打开',
    ledgerNotSupported: 'Ledger不支持',
    pluginDevice: '请连接设备并登录.',
    readyToSubmit: '可以提交',
    waitForSign: '等待签名',
    readyToImport: '可以连接Ledger钱包',
    existLocal: '本地已有此钱包',
    importLedgerSuccess: '导入Ledger钱包成功',
    readyToLogin: '可以登录'
  },

  TopNav: {
    new: '新建',
    edit: '编辑'
  },

  basicInfo: {
    InvalidMnemonic: '无效的助记词。',
    errWif: '无效的WIF'
  },

  SetPaths: {
    name: '钱包文件存储路径',
    tips: '* 钱包文件keystore.db保存着您的加密私钥，请确保您的PC安全和做好keystore.db文件的备份。您需要设置keystore文件的保存路径。',
    close: '关闭',
    enter: '去设置'
  },

  identitys: {
    pageTit: 'ONT ID账户',
    createIdentity: '创建ONT ID账户',
    importIdentity: '导入ONT ID账户'
  },

  createIdentity: {
    create: '创建ONT ID账户',
    basicInfo: '基本信息',
    confirmInfo: '确认信息',
    label: 'ONT ID账户昵称',
    password: '账户密码',
    rePassword: '确认密码',
    cancel: '取消',
    next: '继续'
  },

  importIdentity: {
    import: '导入ONT ID',
    basicInfo: '基本信息',
    keystore: 'Keystore'
  },

  wallets: {
    all: '全部钱包',
    common: '普通钱包',
    shared: '共享钱包',
    temp: '之前的临时功能',
    createCommonWallet: '创建钱包',
    importCommonWallet: '导入钱包',
    createSharedWallet: '创建钱包',
    joinSharedWallet: '加入钱包',
    importLedgerWallet: '连接Ledger钱包',
    ledger: 'Ledger钱包',
    comingSoon: '敬请期待',
    ledgerHelpLink: '如何使用'
  },

  dashboard: {
    getTransErr: '交易记录获取失败，网络错误。'
  },

  createJsonWallet: {
    create: '新建普通钱包',
    basicInfo: '基本信息',
    label: '钱包名称',
    password: '输入密码',
    rePassword: '重复密码',
    next: '继续',
    cancel: '取消',
    back: '返回',
    details: '详情',
    confirmInfo: '确认信息',
    labelN: '名称',
    addressN: '地址',
    pubKeyN: '公钥',
    signatureSchemeN: '签名算法',
    wif: 'WIF',
    mnemonic: '助记词',
    privateKey: '私钥',
    backupWallet: '请下载.dat文件并做好备份',
    createSuccess: '创建普通钱包成功！',
    download: '下载'
  },

  importJsonWallet: {
    datFile: '选择文件',
    selectedDatFile: '已选择文件： ',
    dat: '.dat文件',
    datImportPassword: '解锁dat文件的密码',
    create: '导入普通钱包',
    basicInfo: '基本信息',
    label: '钱包名称',
    wif: 'WIF',
    wifTip: '请输入52位的WIF文本',
    privateKeyTip: '请输入64位HEX格式的密钥',
    datPassword: '输入新密码',
    datRePassword: '重复新密码',
    password: '输入密码',
    rePassword: '重复密码',
    next: '继续',
    cancel: '取消',
    back: '返回',
    details: '详情',
    confirmInfo: '确认信息',
    mnemonic: '请用空格分隔助记词',
    privateKey: '私钥'
  },

  createSharedWallet: {
    basicInfo: '基本信息',
    copayers: '联合支付人',
    processing: '处理中',
    label: '共享钱包名称',
    copayers2_12: '联合支付人(2-12)',
    address: '地址',
    inputPks: '输入 2 - 12 公钥\' 信息',
    name: '名字',
    publicKey: '公钥',
    add: '+ 增加',
    next: '继续',
    cancel: '取消',
    back: '返回',
    importSharedWallet: '导入共享钱包',
    requiredSigNum: '选择签名数量',
    success: '成功',
    duplicateCreate: '共享钱包已存在，请导入.',
    createFailed: '错误，请稍后重试。',
    createSuccess: '创建共享钱包成功',
    create: '创建共享钱包',
    walletNameErr: '钱包名称长度不可超过12个字符。',
    emptyLabel: '钱包名称不能为空.'
  },

  importSharedWallet: {
    import: '加入共享钱包',
    basicInfo: '基本信息',
    inputPass: '输入密码',
    importSuccess: '成功',
    inputAddress: '共享钱包地址',
    search: '查询',
    name: 'Shared Wallet 名字',
    totalCopayerNumber: '联合支付人数',
    requiredCopayerNumber: '最少签名数',
    allCopayers: '全部联合支付人地址',
    noResult: '没有结果',
    address: '地址',
    chooseLocalWallet: '选择本地钱包加入',
    localWalletInfo: '本地钱包详情',
    walletName: '钱包名字',
    pk: '公钥',
    next: '继续',
    cancel: '取消',
    back: '返回',
    join: '加入',
    inputPassword: '输入密码加入',
    joinBefore: '你已经加入过这个钱包。',
    success: '已经成功加入钱包！',
    passwordError: '密码错误。',
    sorry: '对不起！',
    notFound: '找不到该共享钱包。'
  },

  importLedgerWallet: {
    import: '连接Ledger钱包',
    label: '钱包名称',
    next: '连接'
  },

  sharedWalletHome: {
    send: '发送',
    receive: '接收',
    claim: '认领',
    rule: '规则',
    copayers: '联合支付人',
    pendingTx: '待处理交易',
    completedTx: '已完成交易',
    owners: '所属人',
    address: '地址',
    amount: '数量',
    max: '最大',
    to: '接收',
    recipient: '接收方地址',
    cancel: '取消',
    next: '继续',
    back: '返回',
    submit: '提交',
    asset: '资产',
    sponsor: '发起人',
    dragDecide: '拖动序号决定顺序',
    fee: '费用',
    inputPassword: '输入密码',
    inputPassToTransfer: '输入密码完成转账',
    walletAddress: '钱包地址',
    createTime: '创建时间',
    balance: '余额',
    confirmation: '确认',
    agreeToSend: '我同意发送资产',
    signSequence: '选择签名人数',
    sign: '签名',
    checkMore: '查看更多',
    publicKey: '公钥'
  },

  commonWalletHome: {
    claimableOng: '可提取的ONG',
    unboundOng: '未绑定的ONG',
    redeem: '提取',
    receive: '接收',
    walletQrCode: '钱包地址二维码',
    walletAddress: '钱包地址',
    publicKey :'公钥',
    redeemCharge: '提取ONG需要支付0.01ONG',
    inputPass: '请输入钱包密码',
    emptyPass: '密码不能为空',
    cancel: '取消',
    submit: '提交'
  },

  transfer: {
    inputValidAmount: '请输入有效的转账金额。',
    inputValidAddress: '请输入有效的转账地址。',
    exceedBalance : '转账金额不能超余额'
  },
  setting: {
    name: '设置',
    net: '网络',
    lang: '语言',
    testNet: 'ONT测试网络',
    mainNet: 'ONT主网',
    en: 'English',
    zh: 'Chinese',
    pathTit: '当前路径： ',
    path: '钱包保存路径',
    change: '修改',
    setNetworkSuccess: '网络成功设置成：'
  },
  ledgerWallet: {
    nameOfLedgerWallet: 'Ledger钱包名称',
    info: 'Ledger钱包信息',
    connectApp: '请连接您的ledger设备并打开ONT app.',
    status: '设备状态',
    labelEmpty: '钱包名称不能为空.',
    deviceError: '不能连接到设备，请重试.'
  }
}
