function Component () {
      return <div>
        <span style={{ display: 'inline-block', marginRight: '10px' }}>
          <Fa
            style={{ marginRight: '4px', color: '#0C090A', opacity: '0.6', fontSize: '18px', verticalAlign: 'middle' }}
          />
          <span style={{ verticalAlign: 'bottom' }}>{ 'title' }</span>
        </span>
        <span>
          <Fa
            icon="location-arrow"
            style={{ marginRight: '4px', color: '#0C090A', opacity: '0.6', fontSize: '18px', verticalAlign: 'middle' }}
          />
          <span style={{ verticalAlign: 'bottom' }}>{ this.state.info?.device.app_version }</span>
          <br />
          <span style={{ color: '#999999' }} title="Когда последний раз делал что-то в приложении">
            { this.state.info?.device.last_request_at }
          </span>
        </span>
      </div>;
}
