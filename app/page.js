import React from 'react'

export default function page() {

  return (
    <div>
      <div id="wg-api-football-games"
        data-host="v3.football.api-sports.io"
        data-key="9934587b22930a733e2774cb3b1f3e1d"
        data-date=""
        data-league=""
        data-season=""
        data-theme="dark"
        data-refresh="15"
        data-show-toolbar="true"
        data-show-errors="false"
        data-show-logos="false"
        data-modal-game="true"
        data-modal-standings="true"
        data-modal-show-logos="true">
      </div>
      <script
        type="module"
        src="https://widgets.api-sports.io/2.0.3/widgets.js" defer>
      </script>
    </div>
  )
}