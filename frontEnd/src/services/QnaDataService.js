// QnaDataService.js
// 목적 : Qna 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../http-common";

class QnaDataService {
    // 모든 Qna정보 조회 요청 함수
    getAll(searchSelect, searchKeyword, page, size) {
        // alert(searchSelect)
        // alert(searchKeyword)
        // get 방식 통신 요청 -> @GetMapping("/api/qna")
        return http.get(`/qna?searchSelect=${searchSelect}&searchKeyword=${searchKeyword}&page=${page}&size=${size}`); 
    }


    // 페이징 처리 없이 모든 qna 정보 조회 : TODO: 0102 추가_정주희
    getAllQna() {
        return http.get(`/qna/list`)
    }

    // qno 번호로 조회 요청 함수 ---**********
    // get 방식 통신 요청 -> @GetMapping("/api/qna/{qno}"), @PathVariable
    get(qno) {
        return http.get(`/qna/${qno}`)
    }

    // 이름으로 조회 요청 함수 : TODO: 0102 추가_정주희
    getMyQna(username){
        return http.get(`/qna/${username}`)
    }

    // Qna정보 생성(insert) 요청 함수
    // post 방식 통신 요청 -> @PostMapping("/api/qna"), @RequestBody
    create(data) {
        console.log(data);
        return http.post("/qna", data);
    }

    // Qna정보 수정(update) 요청 함수
    // put 방식 통신 요청 -> @PutMapping("/api/qna/{qno}"), @RequestBody
    update(qno, data) {
        return http.put(`/qna/${qno}`, data);
    }

    // Qna정보 삭제(delete) 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/qna/deletion/{qno}")
    //                        , @PathVariable  
    delete(qno) {
        return http.delete(`/qna/deletion/${qno}`);
    }

    // Qna정보 전체 삭제 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/qna/all")
    deleteAll() {
        return http.delete("/qna/all")
    }

}

export default new QnaDataService();