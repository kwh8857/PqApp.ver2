import images from "@assets/images"
import colors from "@assets/colors"

const initialState = {
  header: {
    is_back: false
  },
  toast: {
    isActive: false,
    msg: ''
  },
  home: {
    list: [],
    detail: {
      content: [],
      comments: []
    }
  },
  slide: 1,
  detail: {
    btn: [{
      backcolor: colors.main,
      title: '네, 티켓을 받았습니다',
      color: 'white'
    }, {
      backcolor: 'white',
      title: '티켓 미수령 문의하기',
      color: colors.main,
      img: images.detail.purple_call
    }, ],
    pin: [{
      idx: 0,

    }, {
      idx: 1,

    }, {
      idx: 2,

    }, {
      idx: 3,

    }, {
      idx: 4,

    }, {
      idx: 5,
    }],
    is_pin: 'NONE'
  }
}

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case 'SLIDE/UPDATE':
      return {
        ...state,
        slide: payload
      }
      case 'SHOW/TOAST':
        return {
          ...state,
          toast: payload
        }
        case 'REWARD/LIST':
          return {
            ...state,
            home: {
              ...state.home,
              list: payload
            }
          }
          case 'TEMPLATES/LIST':
            return {
              ...state,
              home: {
                ...state.home,
                detail: {
                  ...state.home.detail,
                  content: payload
                }
              }
            }
            case 'COMMENT/UPDATE':
              return {
                ...state,
                home: {
                  ...state.home,
                  detail: {
                    ...state.home.detail,
                    comments: payload
                  }
                }
              }
              case 'DETAIL/PIN/STATE/CHANGE':
                return {
                  ...state,
                  detail: {
                    ...state.detail,
                    is_pin: payload
                  }
                }
                case 'HEADER/BACK/STATE/CHANGE':
                  return {
                    ...state,
                    header: {
                      ...state.header,
                      is_back: payload
                    }
                  }
                  default:
                    return state
  }
}