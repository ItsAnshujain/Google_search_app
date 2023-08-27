import { data } from "autoprefixer";

const SearchedItemTemplate = ({data}) => {
    function createMarkup(html) {
        return {__html: html};
      }
    return (
        <div className="flex flex-col py-3 max-w-[700px]">
            <div className="group cursor-pointer" onClick={()=> window.open(data.link)}>
            <div className="text-sm truncate text-[#202124]">{data.formattedUrl}</div>
            <div className="group-hover:underline text-xl text-[#1a8dab] pt-2">{data.title}</div>
        </div>
        <div className="text-sm text-[#] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}>
          
        </div>
        </div>
    )
};

export default SearchedItemTemplate;
