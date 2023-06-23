import { useState } from "react"
import { VirkopediaArticle } from "components/virkopedia/virkopedia-article"
import { VirkopediaTab } from "components/virkopedia/virkopedia-tab"
import contentData from "constants/database.json"
import { useTranslate } from "translations/useTranslate"

const articles = contentData.virkopediaData

const Virkopedia = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const { t } = useTranslate()
  const { content, title } = articles[activeButtonIndex]

  return (
    <div className="virkopedia">
      <h2>Virkopedia</h2>
      <div className="virkopedia-container">
        <div className="btn-container">
          {articles.map(({ title }, index) => (
            <VirkopediaTab
              key={t(title) + index}
              setActiveButtonIndex={setActiveButtonIndex}
              title={t(title)}
              index={index}
              activeButtonIndex={activeButtonIndex}
            />
          ))}
        </div>
        <VirkopediaArticle
          title={t(title)}
          content={t(content)}
        />
      </div>
    </div>
  )
}

export default Virkopedia
