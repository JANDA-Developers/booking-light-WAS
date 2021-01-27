import React from 'react';
import classNames from 'classnames';
import { IDiv, JDatomExtentionSet, TElements } from '@janda-com/front/dist/types/interface';
import { JDatomClasses, JDbutton, JDtypho } from '@janda-com/front';
import { isEmpty } from 'lodash';

type TItems = {
    _id: string;
    name: string;
}


export interface IConfigerProp extends IDiv, JDatomExtentionSet {
    enableHeader?: TElements;
    unableHeader?: TElements;
    unableFilter?: (value: string) => boolean;
    enableFilter?: (value: string) => boolean;
    /** 사용함 처리된 아이템들*/
    enableIds: string[];
    /** 모든 아이템들*/
    allItem: TItems[];
    /** 현재 사용함 처리의 아이템들이 변할떄마다 변환해줌 */
    onEnableChange: (enableItems: string[]) => any;
}

export const Configer: React.FC<IConfigerProp> = ({
    allItem,
    enableIds,
    enableHeader,
    unableHeader,
    unableFilter = () => true,
    enableFilter = () => true,
    onEnableChange,
    className,
    mb,
    mr,
    hide,
}) => {
    const unEnableItems = allItem.filter(item => !enableIds.includes(item._id));
    const enableItems = allItem.filter(item => enableIds.includes(item._id));

    const classes = classNames('configer', className, {
        ...JDatomClasses({
            hide,
            mb,
            mr,
        }),
    });


    return (
        <div className={classes}>
            <div className="configer__enables">
                {enableHeader && (
                    <div className="configer__head">{enableHeader}</div>
                )}
                <div className="configer__body">
                    {enableItems.filter((item) => enableFilter(item.name)).map((item, i) => {
                        return (
                            <div
                                onClick={() => {
                                    const enableCopy = enableIds.slice();
                                    enableCopy.splice(i, 1);
                                    onEnableChange([...enableCopy]);
                                }}
                                className="configer__li"
                                key={item._id + 'enalbe'}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                    {isEmpty(enableItems) && (
                        <div>
                            <JDtypho color="grey1">No Data</JDtypho>
                        </div>
                    )}
                </div>
            </div>
            <div className="configer__buttons">
                <div>
                    <JDbutton
                        size="small"
                        br="square"
                        mode={['border', 'iconButton']}
                        mb="small"
                        iconProp={{
                            size: 'small',
                            icon: 'arrowRight',
                        }}
                        onClick={() => {
                            onEnableChange([]);
                        }}
                    />
                </div>
                <div>
                    <JDbutton
                        size="small"
                        br="square"
                        mode={['border', 'iconButton']}
                        style={{
                            transform: 'scale(-1)',
                        }}
                        onClick={() => {
                            onEnableChange(allItem.map(item => item._id));
                        }}
                        mb="no"
                        iconProp={{
                            size: 'small',
                            icon: 'arrowRight',
                        }}
                    />
                </div>
            </div>
            <div className="configer__unables">
                {unableHeader && (
                    <div className="configer__head">{unableHeader}</div>
                )}
                <div className="configer__body">
                    {unEnableItems.filter(item => unableFilter(item.name)).map(item => {
                        return (
                            <div
                                onClick={() => {
                                    enableIds.push(item._id);
                                    onEnableChange([...enableIds]);
                                }}
                                className="configer__li"
                                key={item._id + 'unEnable'}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                    {isEmpty(unEnableItems) && (
                        <div>
                            <JDtypho color="grey1">No Data</JDtypho>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Configer;
