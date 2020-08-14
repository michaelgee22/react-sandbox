import PropTypes from 'prop-types'

import { Card, Button, Icon, Popup } from 'semantic-ui-react'

import styles from './ProjectItem.module.css'

export const ProjectItem = props => {
  return (
    <Card className={styles.project}>
      <div className={styles.projectHeader} id={styles[props.id]}>
        <img src={props.imageProps.src} alt={props.imageProps.alt} className={styles.projectImg} />
      </div>

      <Card.Header>
        <div className={styles.projectTitle}>{props.title}</div>
      </Card.Header>
      <Card.Meta>
        <div className={styles.projectSubtext}>{props.dates}</div>
      </Card.Meta>

      <Card.Content style={{ padding: 8 }} extra>
        <div className={styles.projectIconsContainer}>
          <div>
            <Button icon size="big" className={styles.projectIcon}>
              <Icon name="linkify" />
            </Button>
            <Button icon size="big" className={styles.projectIcon}>
              <Icon name="github" />
            </Button>
          </div>

          <Popup
            content="Testing"
            on="click"
            trigger={
              <Button icon size="big" className={styles.projectIcon}>
                <Icon name="info circle" />
              </Button>
            }
          ></Popup>
        </div>
      </Card.Content>
    </Card>
  )
}

ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }).isRequired,
  externalLinks: PropTypes.shape({
    site: PropTypes.string,
    sourceCode: PropTypes.string
  })
}