import React, { useState } from "react";

export class Page{
    constructor(page : number = 1, cntPerPage : number = 10){
        
        this.page = page;
        if(page < 1){
            this.page = 1;
        }
        this.cntPerPage = cntPerPage;
        //----------------------------------------------------------------
        
        this.totalPageSize =0; //총 페이지 갯수
        this.start_page_num =0; //시작 페이지
        this.end_page_num =0; //마지막 페이지
        this.isPrev = false;
        this.isNext = false;
        this.prev_page_num =0;
        this.next_page_num =0;
        this.totalCount = 0;
        this.remainder = 0;
    }


    page : number//: page, //현재 페이지

    cntPerPage : number //: cntPerPage, //페이지당 문서 갯수

    totalPageSize : number//: totalPageSize, //페이지 총 갯수

    totalCount : number//: totalCount, // 총 갯수

    remainder : number//: totalCount, // 총 갯수

    start_page_num : number//: start_page_num, //시작페이지

    end_page_num : number//: end_page_num, //마지막페이지

    isPrev : Boolean//: isPrev,

    isNext : Boolean//: isNext,

    prev_page_num : number//: prev_page_num, //이전페이지

    next_page_num : number//: next_page_num, //다음 페이지

    public calculate(total_cnt : number){
        this.totalCount = total_cnt;
        this.totalPageSize = Math.ceil(total_cnt / this.cntPerPage);  //총 페이지 사이즈 = (글 갯수 - 1 / w_size ) + 1
        this.remainder = total_cnt % this.cntPerPage;

        if(this.totalPageSize < this.page){
            this.page = this.totalPageSize;
        }
        
        // this.start_page_num =  (Math.floor((this.page-1) / 10) * 10) + 1 //시작번호 = ( (페이지 번호 -1) / 총 페이지 사이즈 ) * 총 페이지 사이즈 + 1
        // this.end_page_num = this.start_page_num + 10 - 1 //마지막번호 = 시작 페이지 번호 + 페이지 총 사이즈 -1
        this.start_page_num =  (Math.floor((this.page-1) / this.cntPerPage) * this.cntPerPage) + 1 //시작번호 = ( (페이지 번호 -1) / 총 페이지 사이즈 ) * 총 페이지 사이즈 + 1
        this.end_page_num = this.start_page_num + this.cntPerPage - 1 //마지막번호 = 시작 페이지 번호 + 페이지 총 사이즈 -1
        //start_page_num = start_page_num - (end_page_num - start_page_num) +1
        if (this.end_page_num > this.totalPageSize) {
            this.end_page_num = this.totalPageSize;
        }
        
        //이전페이지 활성화
        if(this.start_page_num.toString().length >= 2){
            this.isPrev=true;
            this.prev_page_num = this.start_page_num-1; //이전페이지 번호
        }
        //다음페이지 활성화
        if(this.end_page_num < this.totalPageSize){
            this.isNext = true;
            this.next_page_num = this.end_page_num+1; //다음 페이지 번호
        }
    }
}


export const generateClientPaging = <T>(items: T[], cntPerPage: number) => {
    const [page, setPage] = useState(1);
    const paging = new Page(page, cntPerPage);
    paging.calculate(items.length);

    const startPoint = (page - 1) * cntPerPage;
    const endPoint = page * cntPerPage;
    const slice = items.slice(startPoint, endPoint);
    return { paging, slice, setPage };
};


