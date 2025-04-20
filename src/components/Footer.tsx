import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeibo, faWeixin, faQq, faBilibili } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (<div>
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">关于我们</h3>
            <p className="footer-description">宝可梦图鉴系统致力于为训练师提供最全面的宝可梦信息，帮助您更好地了解、培养和训练您的宝可梦。</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">快速链接</h3>
            <ul className="footer-links">
              <li><a href="index.html">首页</a></li>
              <li><a href="index.html">图鉴</a></li>
              <li><a href="BattleStrategy.html">对战攻略</a></li>
              <li><a href="Evolution.html">进化路线</a></li>
              <li><a href="HotTopics.html">社区</a></li>
              <li><a href="SkinWorkshop.html">皮肤工坊</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">联系我们</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-envelope"></i> contact@pokemonpedia.com</li>
              <li><i className="fas fa-phone"></i> +86 123 4567 8910</li>
              <li><i className="fas fa-map-marker-alt"></i> 关都地区，真新镇</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">关注我们</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faWeibo} className="text-primary" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faWeixin} className="text-primary" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faQq} className="text-primary" />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faBilibili} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2023 宝可梦图鉴系统. 保留所有权利.</p>
          <div className="footer-legal">
            <a href="#">隐私政策</a>
            <a href="#">使用条款</a>
            <a href="#">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  </div>)
}

export default Footer