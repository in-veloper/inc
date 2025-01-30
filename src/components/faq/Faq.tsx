import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import SidebarMenu from "../common/SidebarMenu"
import { FaQ } from "react-icons/fa6"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FaqImage from '../../asset/icon/faq3.png'
import "./style/faq.css"

const Faq = () => {
    const faqData = [
        {
            title: "비밀번호를 잊어버렸어요. 어떻게 복구하나요?",
            content: "로그인 화면에서 '비밀번호 찾기'를 클릭하고, 가입한 이메일 주소를 입력하면 복구 이메일이 발송됩니다."
        },
        {
            title: "게시판 이용 시 준수해야 할 규칙은 무엇인가요?",
            content: "비방, 욕설, 허위 정보 게시를 금지하며, 게시판 운영 정책에 따라 위반 시 제재를 받을 수 있습니다."
        },
        {
            title: "자료실에서 파일 다운로드는 어떻게 하나요?",
            content: "자료실 게시판에 업로드된 파일은 로그인 후 다운로드 가능합니다. 일부 자료는 관리자의 승인이 필요할 수 있습니다."
        },
        {
            title: "사이트 사용 중 오류가 발생했어요. 어디에 신고하나요?",
            content: "'문의하기' 버튼을 클릭하거나 고객센터 이메일로 상세 내용을 보내주세요."
        },
        {
            title: "사이트 공지사항은 어디서 확인할 수 있나요?",
            content: "메인 페이지 상단의 '공지사항' 메뉴에서 최신 공지사항을 확인할 수 있습니다."
        },
    ]

    return (
        <div className="faq">
            <SidebarMenu />
            <div className="faq-container">
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        FAQ
                    </Typography>
                    <Divider sx={{ marginTop: '10px' }} />
                </Box>
                <Box>
                    {faqData.map((item, index) => (
                        <Accordion key={index} sx={{ border: '1px solid #E2E2E2'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index + 1}-content`}
                                id={`panel${index + 1}-header`}
                            >
                                <img src={FaqImage} alt="faq_iamge" style={{ width: 23, height: 23, marginRight: 15, marginTop: 1 }}/>
                                {/* <FaQ  style={{ fontSize: 20, marginRight: 20, marginTop: 2, color: '#9E0011' }}/> */}
                                <Typography component="span" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.content}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </div>
        </div>
    )
}

export default Faq