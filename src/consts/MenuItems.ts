export const menuItems = [
    {   
        id: 1, 
        title: '이용 안내', 
        description: '보건 관련 이슈 공유', 
        path: 'notice',
        subItems: [
            {title: "공지사항", path: '/notice'}, 
            {title: "1:1 문의", path: '/inquiry'}, 
            {title: "FAQ", path: '/faq'}
        ]

    },
    { 
        id: 2, 
        title: '교육 자료 공유', 
        description: '공문 및 교육 관련 자료 공유', 
        path: '',
        subItems: [
            {title: "연구논문", path: ''}, 
            {title: "대학원", path: ''}
        ] 
    },
    { 
        id: 3, 
        title: '건강진단', 
        description: '일반건강진단 및 특수건강진단', 
        path: '',
        subItems: [
            {title: "보건발언대", path: ''},
            {title: "보건Q&A", path: ''},
            {title: "구인구직", path: ''}
        ] 
    },
    { 
        id: 4, 
        title: '작업환경측정', 
        description: '작업환경측정 관련 공유', 
        path: '',
        subItems: [
            {title: "상품리뷰", path: ''},
            {title: "의약품 Q&A", path: ''}
        ]
    },
    { 
        id: 5, 
        title: '의료 및 약품 정보', 
        description: '의료 및 약품에 대한 상세 정보', 
        path: '/medi-info',
        subItems: [
            {title: "약품정보", path: '/medi-info'}, 
            {title: "성과건강", path: ''}
        ]
    },
    { 
        id: 6, 
        title: '보건업무 메뉴얼', 
        description: '보건업무 메뉴얼 관련 공유', 
        path: '',
        subItems: [
            {title: "벼룩시장", path: ''},
            {title: "추천도서", path: ''}
        ]
    },
    { 
        id: 7, 
        title: '법령정보', 
        description: '보건 관련 법령 정보 공유', 
        path: '',
        subItems: [
            {title: "시도교류", path: ''},
            {title : "보건웹툰", path: ''},
            {title: "승진자료실", path: ''}
        ]
    },
    { 
        id: 8, 
        title: '구인구직', 
        description: '구인 및 구직', 
        path: '',
        subItems: [
            {title: "사회건강", path: ''},
            {title: "인체해부", path: ''}
        ]
    }
]