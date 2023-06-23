import { useTranslate } from 'translations/useTranslate'

interface PlaceholderRowProps {
  numberOfColumns: string
  titleColumnOne: string
  contentColumnOne: string
  titleColumnTwo: string
  contentColumnTwo: string
  titleColumnThree: string
  contentColumnThree: string
}

interface PlaceholderColumnProps {
  row: PlaceholderRowProps
}

export const PlaceholderRow = ({ row }: PlaceholderColumnProps) => {
  const { t } = useTranslate()

  const {
    numberOfColumns,
    titleColumnOne,
    contentColumnOne,
    titleColumnTwo,
    contentColumnTwo,
    titleColumnThree,
    contentColumnThree,
  } = row

  const allColumns = [
    { title: titleColumnOne, text: contentColumnOne },
    { title: titleColumnTwo, text: contentColumnTwo },
    { title: titleColumnThree, text: contentColumnThree },
  ]

  const numberOfColumnsAsNumber = Number(t(numberOfColumns))

  return (
    <div className="placeholder-wrapper">
      {allColumns.slice(0, numberOfColumnsAsNumber).map((column, index) => {
        return (
          <div
            key={t(column.title) + numberOfColumnsAsNumber + index}
            className={`placeholder-col-${numberOfColumnsAsNumber}`}>
            <h3>{t(column.title)}</h3>
            <p>{t(column.text)}</p>
          </div>
        )
      })}
    </div>
  )
}
