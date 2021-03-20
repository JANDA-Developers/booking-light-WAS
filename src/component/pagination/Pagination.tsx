import React from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import { JDicon } from '../icons/Icons';
import { IusePagination, JDalign, JDatomClasses, JDtypho } from '@janda-com/front';
import { IDiv, JDatomExtentionSet } from '@janda-com/front/dist/types/interface';

const default_prev = (
    <JDalign
        flex={{
            vCenter: true,
        }}
    >
        <JDicon
            className="JDpagination__arrowicon"
            mr="tiny"
            style={{
                transform: 'scale(-1)',
                margin: 0
            }}
            size="small"
            icon="arrow2"
        />
        <JDtypho className="JDpagination__btn-txt" size="small" mr="small">
            이전
    </JDtypho>
    </JDalign>
);

const default_next = (
    <JDalign
        flex={{
            vCenter: true,
        }}
    >
        <JDtypho className="JDpagination__btn-txt" size="small" mr="small">
            이후
    </JDtypho>
        <JDicon className="JDpagination__arrowicon" mr="tiny" size="small" icon="arrow2" />
    </JDalign>
);

export interface IProps extends JDatomExtentionSet {
    /**
     * The total number of pages.
     */
    pageCount: number;

    /**
     * The range of pages displayed.
     */
    pageRangeDisplayed?: number;

    /**
     * The number of pages to display for margins.
     */
    marginPagesDisplayed?: number;

    /**
     * Label for the `previous` button.
     */
    previousLabel?: React.ReactNode;

    /**
     * Label for the `next` button.
     */
    nextLabel?: React.ReactNode;

    /**
     * Label for ellipsis.
     */
    breakLabel?: string | React.ReactNode;

    /**
     * The classname on tag `li` of the ellipsis element.
     */
    breakClassName?: string;

    /**
     * The classname on tag `a` of the ellipsis element.
     */
    breakLinkClassName?: string;

    /**
     * The method to call when a page is clicked. Exposes the current page object as an argument.
     */
    onPageChange?(selectedItem: { selected: number }): void;

    /**
     * The initial page selected.
     */
    initialPage?: number;

    /**
     * To override selected page with parent prop.
     */
    forcePage?: number;

    /**
     * Disable onPageChange callback with initial page. Default: false
     */
    disableInitialCallback?: boolean;

    /**
     * The classname of the pagination container.
     */
    containerClassName?: string;

    /**
     * The classname on tag `li` of each page element.
     */
    pageClassName?: string;

    /**
     * The classname on tag `a` of each page element.
     */
    pageLinkClassName?: string;

    /**
     * The classname for the active page.
     */
    activeClassName?: string;

    /**
     * The classname for the active link.
     */
    activeLinkClassName?: string;

    /**
     * The classname on tag `li` of the `previous` button.
     */
    previousClassName?: string;

    /**
     * The classname on tag `li` of the `next` button.
     */
    nextClassName?: string;

    /**
     * The classname on tag `a` of the `previous` button.
     */
    previousLinkClassName?: string;

    /**
     * The classname on tag `a` of the `next` button.
     */
    nextLinkClassName?: string;

    /**
     * The classname for disabled `previous` and `next` buttons.
     */
    disabledClassName?: string;

    /**
     * The method is called to generate the href attribute value on tag a of each page element.
     */
    hrefBuilder?(pageIndex: number): void;

    /**
     * Extra context to add to the aria-label HTML attribute.
     */
    extraAriaContext?: string;
    /**
     * 이전 버튼을 출력할지 결정
     */
    previousDisplay?: boolean;
    /**
     * 텍스트 사이즈
     */
    textSize?: 'large' | 'small';
    /**
     * 자기정렬
     */
    align?: 'center';
    wrapProp?: IDiv;
    /**
     * 페이지 설정
     */
    setPage: (foo: number) => any;
    totalPageCount: number;
}

export const Pagination: React.FC<IProps> = ({
    previousDisplay,
    textSize,
    align,
    wrapProp,
    pageRangeDisplayed = 5,
    marginPagesDisplayed = 0,
    setPage,
    previousLabel = default_prev,
    nextLabel = default_next,
    pageCount,
    totalPageCount,
    ...props
}) => {
    const classes = classNames(wrapProp?.className, undefined, {
        'JDpagination-wrap': true,
        'JDpagination-wrap--text-large': textSize === 'large',
        'JDpagination-wrap--text-small': textSize === 'small',
        'JDpagination-wrap--align-center': align === 'center',
        'JDpagination-wrap--prev-hidden': previousDisplay === false,
        ...JDatomClasses(props),
    });

    const onPageChange = ({ selected }: any) => {
        console.log({ selected });
        setPage(selected);
    };

    console.log({ pageCount });

    return (
        <div {...wrapProp} className={classes}>
            <ReactPaginate
                pageRangeDisplayed={pageRangeDisplayed}
                marginPagesDisplayed={marginPagesDisplayed}
                containerClassName="JDpagination" // Ul
                pageClassName="JDpagination__li"
                activeClassName="JDpagination__li--active"
                pageLinkClassName="JDpagination__a"
                activeLinkClassName="JDpagination__a--active"
                previousClassName="JDpagination__btn JDpagination__btn-prev"
                nextClassName="JDpagination__btn JDpagination__btn-next"
                previousLinkClassName="JDpagination__btn JDpagination__btn-prev__a"
                nextLinkClassName="JDpagination__btn-next__a"
                disabledClassName="JDpagination__btn--disabled"
                extraAriaContext="extraAriaContext"
                breakClassName="JDpagination__ellipsis"
                breakLinkClassName="JDpagination__ellipsis-a"
                previousLabel={previousLabel}
                nextLabel={nextLabel}
                {...props}
                pageCount={totalPageCount || 1}
                onPageChange={onPageChange}
            />
        </div>
    );
};
//
export default Pagination;
