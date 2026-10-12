const assetPathPrefix = "/figma-components";
const imgIconNameAudio = `${assetPathPrefix}/fb1b8.svg`;
const imgIconXMarkBold = `${assetPathPrefix}/1941c.svg`;

type Component24X24Props = {
  className?: string;
  iconName?: "Audio";
};

function Component24X24({ className, iconName = "Audio" }: Component24X24Props) {
  return (
    <div className={className || "relative size-[20px]"} data-node-id="369:46169">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconNameAudio} />
    </div>
  );
}

type ComponentProps = {
  className?: string;
  property1?: "上传中";
};

function Component({ className, property1 = "上传中" }: ComponentProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[241px]"} data-node-id="437:40394">
      <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] content-stretch flex flex-col items-start p-[4px] relative rounded-[20px] shrink-0 w-full" data-node-id="437:40395">
        <div className="content-stretch flex h-[60px] items-start relative shrink-0 w-[233px]" data-node-id="437:40473">
          <div className="bg-[var(--fill\/white-static-2\/regular,rgba(255,255,255,0.5))] content-stretch flex flex-[1_0_0] gap-[2px] h-full items-center justify-center min-w-px overflow-clip relative rounded-[16px]" data-node-id="437:40474" data-name="输入框 Input">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="437:40477">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-node-id="437:40478" data-name="Text wrapper">
                <div className="bg-[var(--fill\/transparent\/tertiary\/regular,rgba(72,72,73,0.08))] overflow-clip relative rounded-[28.8px] shrink-0 size-[32px]" data-node-id="437:40479" data-name="图片">
                  <Component24X24 className="absolute left-[5.5px] size-[20px] top-[6px]" />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]" data-node-id="437:40483">
                  <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-node-id="437:40484">
                    <p className="[word-break:break-word] font-['PingFang_SC:Medium'] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[12px] text-black text-ellipsis tracking-[0.0804px] w-full whitespace-nowrap" data-node-id="437:40485">
                      音色上传中...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[var(--fill\/transparent\/secondary\/regular,rgba(72,72,73,0.04))] content-stretch flex items-center p-[4px] right-[8px] rounded-[16px] top-[8px]" data-node-id="437:40492" data-name="特殊关闭">
              <div className="relative shrink-0 size-[8px]" data-node-id="437:40493" data-name="Icon/X_Mark_Bold">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconXMarkBold} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
