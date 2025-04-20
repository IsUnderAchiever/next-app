import './page.module.css'

function Test() {
  return (<div>
    <main>
      <section className="strategy-hero">
        <div className="container">
          <h1>宝可梦对战攻略</h1>
          <p>探索最新的对战策略，学习专业训练师的阵容搭配，提升你的对战技巧</p>
        </div>
      </section>

      <div className="container">
        <section className="strategy-grid">
          <article className="strategy-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="喷火龙对战策略" className="strategy-image" />
            <div className="strategy-content">
              <h2 className="strategy-title">喷火龙对战指南</h2>
              <p className="strategy-description">全面解析喷火龙的特性、技能搭配和战术运用，助你成为火焰大师。</p>
              <div className="strategy-tags">
                <span className="strategy-tag">火系</span>
                <span className="strategy-tag">飞行系</span>
                <span className="strategy-tag">特攻手</span>
              </div>
              <div className="strategy-meta">
                <div className="strategy-author">
                  <div className="author-avatar">P</div>
                  <span>皮卡丘训练师</span>
                </div>
                <span>2023-12-15</span>
              </div>
            </div>
          </article>

          <article className="strategy-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="超梦对战策略" className="strategy-image" />
            <div className="strategy-content">
              <h2 className="strategy-title">超梦完全攻略</h2>
              <p className="strategy-description">深入分析超梦的种族值、技能选择和最佳配招，打造无敌超能力者。</p>
              <div className="strategy-tags">
                <span className="strategy-tag">超能力系</span>
                <span className="strategy-tag">传说宝可梦</span>
                <span className="strategy-tag">全能型</span>
              </div>
              <div className="strategy-meta">
                <div className="strategy-author">
                  <div className="author-avatar">M</div>
                  <span>超梦研究员</span>
                </div>
                <span>2023-12-10</span>
              </div>
            </div>
          </article>

          <article className="strategy-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="皮卡丘对战策略" className="strategy-image" />
            <div className="strategy-content">
              <h2 className="strategy-title">皮卡丘进阶技巧</h2>
              <p className="strategy-description">从基础到进阶，掌握皮卡丘的独特战斗风格和连招技巧。</p>
              <div className="strategy-tags">
                <span className="strategy-tag">电系</span>
                <span className="strategy-tag">速攻手</span>
                <span className="strategy-tag">新手友好</span>
              </div>
              <div className="strategy-meta">
                <div className="strategy-author">
                  <div className="author-avatar">A</div>
                  <span>电气专家</span>
                </div>
                <span>2023-12-05</span>
              </div>
            </div>
          </article>

          <article className="strategy-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png" alt="班基拉斯对战策略" className="strategy-image" />
            <div className="strategy-content">
              <h2 className="strategy-title">班基拉斯战术解析</h2>
              <p className="strategy-description">沙暴天气下的绝对霸主，教你如何发挥班基拉斯的全部潜力。</p>
              <div className="strategy-tags">
                <span className="strategy-tag">岩石系</span>
                <span className="strategy-tag">恶系</span>
                <span className="strategy-tag">防御型</span>
              </div>
              <div className="strategy-meta">
                <div className="strategy-author">
                  <div className="author-avatar">T</div>
                  <span>岩石专家</span>
                </div>
                <span>2023-12-01</span>
              </div>
            </div>
          </article>

          <article className="strategy-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png" alt="烈空坐对战策略" className="strategy-image" />
            <div className="strategy-content">
              <h2 className="strategy-title">烈空坐天空霸主</h2>
              <p className="strategy-description">天空之龙的完美配招与战术运用，制霸天空的终极指南。</p>
              <div className="strategy-tags">
                <span className="strategy-tag">龙系</span>
                <span className="strategy-tag">飞行系</span>
                <span className="strategy-tag">传说宝可梦</span>
              </div>
              <div className="strategy-meta">
                <div className="strategy-author">
                  <div className="author-avatar">D</div>
                  <span>龙系大师</span>
                </div>
                <span>2023-11-28</span>
              </div>
            </div>
          </article>

          <article className="strategy-card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png" alt="暴雪王对战策略" className="strategy-image" />
            <div className="strategy-content">
              <h2 className="strategy-title">暴雪王雪天战术</h2>
              <p className="strategy-description">雪天天气下的绝对控制，暴雪王的完美配招与战术运用。</p>
              <div className="strategy-tags">
                <span className="strategy-tag">冰系</span>
                <span className="strategy-tag">草系</span>
                <span className="strategy-tag">天气手</span>
              </div>
              <div className="strategy-meta">
                <div className="strategy-author">
                  <div className="author-avatar">I</div>
                  <span>冰系专家</span>
                </div>
                <span>2023-11-25</span>
              </div>
            </div>
          </article>
        </section>

        <div className="pagination">
          <button className="pagination-button" disabled>上一页</button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
          <span className="pagination-info">共 3 页</span>
          <button className="pagination-button">下一页</button>
        </div>

        <section className="popular-teams">
          <h2 className="section-title">热门阵容推荐</h2>
          <table className="team-table">
            <thead>
              <tr>
                <th>阵容名称</th>
                <th>类型</th>
                <th>宝可梦搭配</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="team-name">晴天队</td>
                <td className="team-type">天气战术 · 特攻向</td>
                <td>
                  <div className="team-pokemon">
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" alt="喷火龙" />
                      <div className="pokemon-name">喷火龙</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="妙蛙花" />
                      <div className="pokemon-name">妙蛙花</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png" alt="风速狗" />
                      <div className="pokemon-name">风速狗</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name">雨天队</td>
                <td className="team-type">天气战术 · 速攻向</td>
                <td>
                  <div className="team-pokemon">
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" alt="水箭龟" />
                      <div className="pokemon-name">水箭龟</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" alt="暴鲤龙" />
                      <div className="pokemon-name">暴鲤龙</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" alt="水伊布" />
                      <div className="pokemon-name">水伊布</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name">平衡队</td>
                <td className="team-type">全能型 · 攻防兼备</td>
                <td>
                  <div className="team-pokemon">
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" alt="超梦" />
                      <div className="pokemon-name">超梦</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png" alt="班基拉斯" />
                      <div className="pokemon-name">班基拉斯</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png" alt="烈空坐" />
                      <div className="pokemon-name">烈空坐</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name">沙暴队</td>
                <td className="team-type">天气战术 · 防御向</td>
                <td>
                  <div className="team-pokemon">
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png" alt="班基拉斯" />
                      <div className="pokemon-name">班基拉斯</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png" alt="摇篮百合" />
                      <div className="pokemon-name">摇篮百合</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png" alt="河马兽" />
                      <div className="pokemon-name">河马兽</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name">雪天队</td>
                <td className="team-type">天气战术 · 控制向</td>
                <td>
                  <div className="team-pokemon">
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png" alt="暴雪王" />
                      <div className="pokemon-name">暴雪王</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png" alt="雪妖女" />
                      <div className="pokemon-name">雪妖女</div>
                    </div>
                    <div className="pokemon-slot">
                      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png" alt="象牙猪" />
                      <div className="pokemon-name">象牙猪</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  </div >)
}

export default Test